import React from "react";
import Navegacion from "./Navegacion";
import useGet from "../hooks/useGet";

export default function SelectorCategorias() {
  let { data, cargando } = useGet(
    "https://dummyjson.com/products/category-list",
  );

  if (cargando) {
    return <div>Cargando categorias...</div>;
  }

  console.log("categorias:", data);
  return (
    <>
      <Navegacion />
      <div>SelectorCategorias</div>
      <form>
        <select>
          {data.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}
