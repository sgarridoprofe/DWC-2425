
function Cabecera({ titulo, color }) {
  console.log("color: " + color);

  const myStyle = {
    color: color,
  };

  //   return <h1 style={{ color: "red" }}>{titulo}</h1>;
  return <h1 style={myStyle}>{titulo}</h1>;
}

export default Cabecera;
