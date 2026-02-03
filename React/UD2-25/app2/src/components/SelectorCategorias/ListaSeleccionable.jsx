import React from "react";
import useGet from "../../hooks/useGet";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ListaSeleccionable({
  categoria,
  seleccion,
  setSeleccion,
}) {
  let url = categoria
    ? `https://dummyjson.com/products/category/${categoria}`
    : "https://dummyjson.com/products";
  /*
  if (categoria) {
    let { data, cargando } = useGet(
      `https://dummyjson.com/products/category/${categoria}`,
    );
    console.log("data categoria:", data[0].products);
  } else {
    let { data, cargando } = useGet("https://dummyjson.com/products");
  }*/

  let { data, cargando } = useGet(url);

  if (cargando) {
    return <div>Cargando productos...</div>;
  }
  //console.log("productos:", data[0].products);
  return (
    <>
      <form>
        <select
          name="selectableList"
          id="selectableList"
          multiple
          size="10"
          style={{ width: "200px", maxWidth: "300px" }}
        >
          {data[0].products.map((producto) => (
            <option key={producto.id} value={producto.title}>
              {producto.title}
            </option>
          ))}
        </select>
      </form>
      <button
        onClick={() => {
          const newSeleccion = document.getElementById("selectableList").value;
          console.log("derecha......", newSeleccion);
          setSeleccion([...seleccion, newSeleccion]);
        }}
      >
        <MdKeyboardArrowRight size={15} />
      </button>
    </>
  );
}
