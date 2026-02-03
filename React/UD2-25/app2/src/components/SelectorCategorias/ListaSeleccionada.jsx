import React from "react";

export default function ListaSeleccionada({ seleccion }) {
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
          {seleccion.map((producto) => (
            <option key={producto} value={producto}>
              {producto}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}
