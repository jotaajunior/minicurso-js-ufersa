export const Tela = (props) => {
  return (
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
      {...props}
    />
  );
};
