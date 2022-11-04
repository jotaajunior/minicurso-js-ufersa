export const Urna = (props) => {
  return (
    <main
      className="urna"
      style={{
        backgroundColor: "rgb(40, 40, 40)",
        padding: 16,
        width: 800,
        display: "flex",
        justifyContent: "space-between",
      }}
      {...props}
    />
  );
};
