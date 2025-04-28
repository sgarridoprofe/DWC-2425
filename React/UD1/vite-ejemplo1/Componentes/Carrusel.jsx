import { useEffect, useState } from "react";
import Producto from "./Producto";
import Navegador from "./Navegador";
import { useParams } from "react-router";

function Carrusel() {
  const { itemId } = useParams();
  const [indice, setIndice] = useState(1);
  const [producto, setProducto] = useState({});

  //   useEffect(() => {
  //     console.log(indice);
  //     document.title = "Contador" + indice;
  //     localStorage.setItem("contador", indice);

  //     fetch("https://fakestoreapi.com/products/" + indice)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         console.log(json);
  //         setProducto(json);
  //       });
  //   }, [indice]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${indice}`
      );
      const data = await response.json();
      setProducto(data);
    }
    fetchData();
  }, [indice]);

  return (
    <>
      <Navegador></Navegador>
      <Producto producto={producto}></Producto>
      <button onClick={() => setIndice(indice + 1)}> {">"} </button>
      {indice > 1 && (
        <button onClick={() => setIndice(indice - 1)}> {"<"} </button>
      )}
    </>
  );
}

export default Carrusel;
