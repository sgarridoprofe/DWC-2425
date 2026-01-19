import React from "react";
import Grid from "../components/Grid";
import Contador from "../components/Contador";
import ContadorClase from "../components/ContadorClase";
import Navegacion from "../components/Navegacion";

export default function Pruebas() {
  return (
    <>
      <Navegacion />
      <div>Página de Pruebas</div>
      <div>
        <ContadorClase />
      </div>
    </>
  );
}
