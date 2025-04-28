import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);
  const [estado, setEstado] = useState("Inicial");

  //let count = 5;

  function handleIncrementa() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    console.log(count);
  }

  function handleSetEstado() {
    setEstado("Finalizado");
  }

  return (
    <>
      {console.log("Rederizado de Contador")}
      <p>
        Contador {count} {estado}
      </p>
      <button onClick={handleIncrementa}>
        Contador {count} {estado}
      </button>
      <button onClick={handleSetEstado}>Finaliza pedido </button>
    </>
  );
}

export default Contador;
