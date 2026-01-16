import React, { useState } from "react";

export default function ContadorClase() {
  const [clase, setClase] = useState({
    nombre: "2 DAW",
    nalumnos: 0,
  });

  const handleAdd = () => {
    setClase({ ...clase, nalumnos: clase.nalumnos + 1 });
  };

  return (
    <>
      <div>ContadorClase</div>
      <p>Clase{clase.nombre}</p>
      <p>Número alumnos{clase.nalumnos}</p>
      <button onClick={handleAdd}>Add</button>
      <button>Remove</button>
    </>
  );
}
