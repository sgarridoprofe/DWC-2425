import React, { useState } from "react";

export default function FormularioArticulo() {
  const [formulario, setFormulario] = useState({ codigo: "", nombre: "" });

  const handleOnChange = (e) => {
    console.log("handleOnChange", e.target.name, e.target.value);
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value.toUpperCase(),
    });

    //setCodigo(e.target.value.toUpperCase());
  };

  return (
    <div>
      FormularioArticulo
      <form>
        <label>
          Codigo:
          <input
            type="text"
            value={formulario.codigo}
            name="codigo"
            onChange={handleOnChange}
          />
        </label>
        <br />
        <label>
          Nombre:
          <input
            type="text"
            value={formulario.nombre}
            name="nombre"
            onChange={handleOnChange}
          />
        </label>
        <br />
      </form>
      <div>Codigo introducido: {formulario.nombre}</div>
    </div>
  );
}
