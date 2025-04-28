import Boton from "./Boton";
import productos from "../datos/productos.json";

function Filtro() {
  let pvpmax = "";

  const handleOnChange = (e) => {
    console.log(e.target.value);
    pvpmax = e.target.value;
  };

  function handleFiltra() {
    alert("prueba...");
    console.log("filtrando..." + pvpmax);
    // productos.forEach((producto) => console.log(producto));
    const productosFiltrados = productos.filter(
      (producto) => producto.price > pvpmax
    );
    console.log(productosFiltrados);
  }

  return (
    <>
      <input
        type="text"
        name="Importe"
        onChange={(e) => handleOnChange(e)}
      ></input>
      <Boton handleClick={handleFiltra}> Filtra</Boton>
    </>
  );
}

export default Filtro;
