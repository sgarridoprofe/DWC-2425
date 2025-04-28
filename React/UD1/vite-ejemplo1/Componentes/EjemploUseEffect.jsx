import { useEffect, useState } from "react";

function EjemploUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Contador" + count;
    localStorage.setItem("contador", count);
    
  }, [count]);

  return (
    <>
      {console.log("Renderizando componente.. Ejemplo UseEffect")}

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count + 2);
        }}
      >
        +2
      </button>

      <p>Contador: {count}</p>
    </>
  );
}

export default EjemploUseEffect;
