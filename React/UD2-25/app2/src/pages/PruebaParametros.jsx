import React from "react";
import { useSearchParams } from "react-router";
import Navegacion from "../components/Navegacion";
import DatosParametro from "../components/DatosParametro";

export default function PruebaParametros() {
  const [parametros, setParametros] = useSearchParams();
  console.log("Parametros prueba", parametros.toString());
  console.log("Parámetro de consulta 'search':", parametros.get("search"));

  return (
    <div>
      <Navegacion />
      <div>PruebaParametros</div>
      <p>Parámetros de ruta y consulta</p>
      <form>
        <input
          id="inputSearch"
          name="search"
          type="text"
          placeholder="Parámetro de consulta"
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            const para = document.getElementById("inputSearch").value;
            console.log("Parámetro a enviar:", para);
            setParametros({ search: para });
          }}
        >
          Enviar
        </button>
      </form>
      <DatosParametro value={parametros.get("search")} />
    </div>
  );
}
