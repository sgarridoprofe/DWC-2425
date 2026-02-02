import React, { use, useEffect, useState } from "react";
import Card from "./Card";
import db from "../json/dbFakestoreapi.json";
import styles from "./Grid.module.css";
import Navegacion from "./Navegacion";
import { FaSpinner } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import useGet from "../hooks/useGet";
import useGet2 from "../hooks/useGet2";

const getData = async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const data = await resp.json();
  console.log(data);
};

const getData2 = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log("productos del fetch,", data);
    });
};

export default function Grid({ search, carrito, setCarrito }) {
  // const [productos, setProductos] = useState([]);
  // const [cargando, setCargando] = useState(true);
  console.log("Renderizando Grid,", search);

  // useEffect(() => {
  //   console.log("Efecto de Grid,");
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Datos del efecto", data);
  //       setProductos([...data]);
  //       setCargando(false);
  //     });
  // }, []);

  // // const { data, cargando, error } = useFetch(
  // //   "https://fakestoreapi.com/products",
  // // );

  let { data, cargando } = useGet("https://fakestoreapi.com/products");

  //let { data, cargando } = useGet2("http://localhost:3000/productos");

  if (cargando) {
    return (
      <>
        <h3>Lista de productos</h3>
        <FaSpinner className={styles.loadingIcon} />
      </>
    );
  }

  if (search) {
    // Filtrar los productos según el término de búsqueda
    data = data.filter((producto) =>
      producto.title.toLowerCase().includes(search.toLowerCase()),
    );
  }
  return (
    <>
      <h3>Lista de productos</h3>

      <ul className={styles.contenedor}>
        {data.map((producto) => (
          <Card
            key={producto.id}
            producto={producto}
            carrito={carrito}
            setCarrito={setCarrito}
          />
        ))}
      </ul>
    </>
  );
}
