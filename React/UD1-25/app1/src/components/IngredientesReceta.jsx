import React, { use, useState } from "react";
import FormIngredientes from "./FormIngredientes";

export default function IngredientesReceta({ ingredientes }) {
  const handleAddIngrediente = () => {
    console.log("Añadir Ingrediente");
    //ingredientes.push({ cantidad: 3, unidades: "tazas", elemento: "agua" });
    setIngredientes([
      ...ingredientes,
      { cantidad: 3, unidades: "tazas", elemento: "agua" },
    ]);
    console.log(ingredientes);
    // Lógica para añadir un nuevo ingrediente
  };

  return (
    <div>
      <div>Ingredientes: Pollo Frito</div>
      <ul>
        {ingredientes.map((ing, index) => (
          <li key={index}>
            {ing.cantidad} {ing.unidades} {ing.elemento}
          </li>
        ))}
      </ul>
      {/* <button onClick={handleAddIngrediente}>Añadir Ingrediente</button> */}
    </div>
  );
}
