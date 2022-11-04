import { useEffect } from "react";
import { useState } from "react";

import "./App.css";

const vote = async (number) => {
  await fetch(`http://localhost:8080/votes/${number}`, {
    method: "post",
  });
};

const voteBranco = async () => {
  await fetch(`http://localhost:8080/votes/0`, {
    method: "post",
  });
};

const fetchVotes = () =>
  fetch("http://localhost:8080/votes").then((res) => res.json());

const Candidato = ({ nome, votos, percentual }) => {
  return (
    <div
      key={nome}
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: 350,
        fontSize: 13,
      }}
    >
      <strong style={{ width: "80%" }}>{nome}</strong>
      <span style={{ color: "darkgrey" }}>
        {votos} {percentual ? `/ ${percentual}` : null}
      </span>
    </div>
  );
};

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState({});
  const [hasVoted, setHasVoted] = useState(false);

  const confirm = (input) => {
    vote(input);
    fetchVotes().then(setResult);
    setInput("");
    /*new Audio(
      "https://www.tse.jus.br/hotsites/simulador-de-votacao/sons/fim.mp3"
    ).play();*/
    setHasVoted(true);
    setTimeout(() => setHasVoted(false), 1000);
  };

  useEffect(() => {
    fetchVotes().then(setResult);
  }, []);

  return (
    <>
      <main
        className="urna"
        style={{
          backgroundColor: "rgb(40, 40, 40)",
          padding: 16,
          width: 800,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <aside
          className="resultados"
          style={{
            width: 400,
            padding: 16,
            backgroundColor: "white",
            fontFamily: "sans-serif",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {hasVoted ? <h1>VOCÊ VOTOU</h1> : null}

          {!hasVoted ? (
            <>
              {result.result?.map((candidate) => (
                <Candidato {...candidate} />
              ))}

              <Candidato nome="TOTAL" votos={result.total} />
              <Candidato nome="TOTAL VÁLIDOS" votos={result.totalValidos} />
            </>
          ) : null}
        </aside>

        <div className="menu">
          <div
            style={{
              border: "1px solid black",
              height: 32,
              width: 300,
              padding: 8,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: 32,
              backgroundColor: "white",
            }}
          >
            {input}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 100px 100px",
              gap: 8,
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => {
              return (
                <button
                  style={{
                    background: "black",
                    color: "white",
                    border: "none",
                    padding: 8,
                    cursor: "pointer",
                  }}
                  onClick={() => setInput((input) => input + number)}
                  key={number}
                >
                  {number}
                </button>
              );
            })}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 100px 100px",
              gap: 8,
              marginTop: 8,
            }}
          >
            <button
              style={{
                textTransform: "uppercase",
                backgroundColor: "white",
                padding: 8,
                border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => voteBranco()}
            >
              Branco
            </button>

            <button
              style={{
                textTransform: "uppercase",
                backgroundColor: "red",
                color: "white",
                padding: 8,
                border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => setInput("")}
            >
              Corrige
            </button>

            <button
              style={{
                textTransform: "uppercase",
                backgroundColor: "green",
                border: "none",
                color: "white",
                padding: 8,
                cursor: "pointer",
              }}
              onClick={() => confirm(input)}
            >
              Confirma
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
