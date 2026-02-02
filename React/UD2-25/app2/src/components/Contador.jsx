import React, { useState } from "react";

export default function Contador() {
  console.log("Renderizando el componente Contador");

  const [contador, setContador] = useState(0);

  const handleClickAdd = () => {
    setContador((contador) => contador + 1);
    setContador((contador) => contador + 1);
    setContador((contador) => contador + 1);
    setContador((contador) => contador + 1);
    setContador((contador) => contador + 1);

    console.log("handleClickAdd", contador);
  };

  return (
    <>
      <div>Contador</div>
      <button onClick={handleClickAdd}>Add {contador}</button>
      <button onClick={() => setContador(contador - 1)}>
        Remove {contador}
      </button>
    </>
  );
}
