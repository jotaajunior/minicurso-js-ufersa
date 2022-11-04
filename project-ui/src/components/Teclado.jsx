export const Teclado = (props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "100px 100px 100px",
        gap: 8,
        marginTop: 8,
      }}
      {...props}
    />
  );
};
