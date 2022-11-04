export const CaixaNumero = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        height: 32,
        width: 300,
        padding: 8,
        display: "flex",
        alignItems: "center",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: 32,
        backgroundColor: "white",
      }}
      {...props}
    />
  );
};
