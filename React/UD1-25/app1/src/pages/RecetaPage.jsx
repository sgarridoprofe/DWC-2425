import React from "react";
import IngredientesReceta from "../components/IngredientesReceta";
import FormIngredientes from "../components/FormIngredientes";
import Receta from "../components/Receta";
import Navegacion from "../components/Navegacion";

export default function RecetaPage() {
  return (
    <>
      <Navegacion />
      <Receta />
    </>
  );
}
