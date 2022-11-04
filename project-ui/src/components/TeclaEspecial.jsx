export const TeclaEspecial = ({ backgroundColor, color, ...rest }) => {
  return (
    <button
      style={{
        textTransform: "uppercase",
        backgroundColor,
        border: "none",
        color,
        padding: 8,
        cursor: "pointer",
      }}
      {...rest}
    />
  );
};
