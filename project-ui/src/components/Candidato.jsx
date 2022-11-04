export const Candidato = ({ nome, votos, percentual }) => {
  return (
    <div
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
