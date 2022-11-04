import { useState, use } from "react";

import { Candidato } from "./components/Candidato";
import { Tecla } from "./components/Tecla";
import { CaixaNumero } from "./components/CaixaNumero";
import { Teclado } from "./components/Teclado";
import { TeclaEspecial } from "./components/TeclaEspecial";
import { Tela } from "./components/Tela";
import { Urna } from "./components/Urna";
import * as Api from "./lib/Api";

import "./App.css";

const initialVotes = Api.fetchVotos();

const App = () => {
  const [voto, setVoto] = useState("");
  const [resultado, setResultado] = useState(use(initialVotes));
  const [jaVotou, setJaVotou] = useState(false);

  const confirmar = (numero) => {
    Api.votar(numero);
    setVoto("");
    Api.fetchVotos().then(setResultado);
    new Audio(
      "https://www.tse.jus.br/hotsites/simulador-de-votacao/sons/fim.mp3"
    ).play();
    setJaVotou(true);
    setTimeout(() => setJaVotou(false), 1000);
  };

  return (
    <>
      <Urna>
        <Tela>
          {jaVotou ? <h1>VOCÊ VOTOU</h1> : null}

          {jaVotou ? null : (
            <>
              {resultado.result?.map((candidate) => (
                <Candidato {...candidate} />
              ))}

              <Candidato nome="TOTAL" votos={resultado.total} />
              <Candidato nome="TOTAL VÁLIDOS" votos={resultado.totalValidos} />
            </>
          )}
        </Tela>

        <main>
          <CaixaNumero>{voto}</CaixaNumero>

          <Teclado>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <Tecla onClick={() => setVoto((input) => input + number)}>
                {number}
              </Tecla>
            ))}
          </Teclado>

          <Teclado>
            <TeclaEspecial
              backgroundColor="white"
              color="black"
              onClick={() => Api.votarBranco()}
            >
              Branco
            </TeclaEspecial>

            <TeclaEspecial
              backgroundColor="red"
              color="white"
              onClick={() => setVoto("")}
            >
              Corrige
            </TeclaEspecial>

            <TeclaEspecial
              backgroundColor="green"
              color="white"
              onClick={() => confirmar(voto)}
            >
              Confirma
            </TeclaEspecial>
          </Teclado>
        </main>
      </Urna>
    </>
  );
};

export default App;
