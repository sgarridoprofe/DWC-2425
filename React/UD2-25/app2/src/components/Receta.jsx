import React from "react";
import IngredientesReceta from "./IngredientesReceta";
import FormIngredientes from "./FormIngredientes";
import { useState } from "react";

export default function Receta() {
  const aringredientes = [
    { cantidad: 1, unidades: "libra", elemento: "pollo" },
    { cantidad: 2, unidades: "cucharadas", elemento: "aceite" },
  ];
  const [ingredientes, setIngredientes] = useState(aringredientes);
  return (
    <>
      <div>Receta de cocina</div>
      <h1>Receta Pollo Frito</h1>
      <IngredientesReceta ingredientes={ingredientes} />
      <FormIngredientes
        ingredientes={ingredientes}
        setIngredientes={setIngredientes}
      />
    </>
  );
}
