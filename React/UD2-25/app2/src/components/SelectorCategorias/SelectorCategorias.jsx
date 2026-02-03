import React from "react";
import Navegacion from "../Navegacion";
import useGet from "../../hooks/useGet";

export default function SelectorCategorias({ setCategoria }) {
  let { data, cargando } = useGet(
    "https://dummyjson.com/products/category-list",
  );

  if (cargando) {
    return <div>Cargando categorias...</div>;
  }

  //console.log("categorias:", data);
  return (
    <>
      <div>SelectorCategorias</div>
      <form>
        <select
          name="categorias"
          onChange={(e) => {
            setCategoria(e.target.value);
          }}
        >
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
