import crypto from "crypto";

import {
  shouldPercentageOrZero,
} from "../utils/float-format.js";

const NULOS = -1;
const BRANCOS = 0;

const candidates = [
  {
    id: crypto.randomUUID(),
    nome: "PADRE KELMON",
    partido: "PTB",
    numero: 24,
  },
  {
    id: crypto.randomUUID(),
    nome: "ALEXANDRE FROTA",
    partido: "PSDB",
    numero: 30,
  },
];
const votes = {
  [BRANCOS]: 0,
  [NULOS]: 0,
  30: 0,
  24: 0
};

export const configRoutes = (app) => {
  app.post("/candidate", (request, reply) => {
    const { nome, numero, partido } = request.body;

    const candidate = {
      id: crypto.randomUUID(),
      nome: nome.toUpperCase(),
      partido: partido.toUpperCase(),
      numero,
    };

    if (candidates.some((c) => c.numero === candidate.numero)) {
      return reply.status(400).send({ error: "Número já cadastrado" });
    }

    candidates.push(candidate);

    if (!votes[numero]) votes[numero] = 0;

    return reply.send(candidate);
  });

  app.post("/votes/:numero", (request, reply) => {
    const { numero } = request.params;

    if (numero == BRANCOS) {
      votes[BRANCOS]++;
      return reply.send({ message: "Voto branco" });
    }

    const candidate = candidates.find((c) => c.numero == numero);

    if (!candidate) {
      votes[NULOS]++;
      return reply.send({ message: "Voto nulo" });
    }

    votes[numero]++;

    return reply.status(200).send({ message: "Voto computado" });
  });

  app.get("/votes", (request, reply) => {
    let totalValidos = 0;
    let total = 0;

    for (const candidato in votes) {
      if (candidato != NULOS && candidato != BRANCOS) {
        totalValidos += votes[candidato];
      }
      total += votes[candidato];
    }

    const result = [];
    for (const candidato in candidates) {
      const { numero, nome, partido } = candidates[candidato];
      result.push({
        nome,
        partido,
        votos: votes[numero],
        percentual: shouldPercentageOrZero(
          (votes[numero] / totalValidos) * 100
        ),
      });
    }

    result.push({
      nome: "NULOS",
      votos: votes[NULOS],
      percentual: shouldPercentageOrZero((votes[NULOS] / total) * 100),
    });

    result.push({
      nome: "BRANCOS",
      votos: votes[BRANCOS],
      percentual: shouldPercentageOrZero((votes[BRANCOS] / total) * 100),
    });

    return reply.send({
      result,
      total,
      totalValidos
    });
  });
};
