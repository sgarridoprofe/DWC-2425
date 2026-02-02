import React from "react";
import useGet from "../hooks/useGet";

export default function ListaSeleccionable() {
  let { data, cargando } = useGet("https://dummyjson.com/products");

  if (cargando) {
    return <div>Cargando productos...</div>;
  }
  console.log("productos:", data.products);
  return (
    <>
      <div>ListaSeleccionable</div>
      <form>
        <list>
          <option>Opcion 1</option>
          <option>Opcion 2</option>
          <option>Opcion 3</option>
        </list>
      </form>
    </>
  );
}
