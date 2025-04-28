/* eslint-disable react/prop-types */
function Boton({ handleClick }) {
  //   function handleClick() {
  //     alert("Acción botón");
  //   }
  return (
    <>
      <button onClick={handleClick}>Filtrar</button>
    </>
  );
}

export default Boton;
