import React from "react";

export default function FormIngredientes({ ingredientes, setIngredientes }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ingrediente añadido");
    const cantidad = document.getElementById("cantidad").value;
    const unidades = document.getElementById("unidades").value;
    const elemento = document.getElementById("elemento").value;
    console.log(`Ingrediente añadido: ${cantidad} ${unidades} ${elemento}`);

    setIngredientes([
      ...ingredientes,
      { cantidad: cantidad, unidades: unidades, elemento: elemento },
    ]);
  };

  return (
    <>
      <div>Formulario de Ingredientes</div>
      <form>
        <p>
          Cantidad:
          <input id="cantidad" type="text" placeholder="Cantidad" />
        </p>
        <p>
          Unidades:
          <input id="unidades" type="text" placeholder="Unidades" />
        </p>
        <p>
          Elemento:
          <input id="elemento" type="text" placeholder="Elemento" />
        </p>
        <button onClick={handleSubmit} type="submit">
          Add Ingrediente
        </button>
      </form>
    </>
  );
}
