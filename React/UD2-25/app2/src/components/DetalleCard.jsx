import React from "react";
import useGet2 from "../hooks/useGet2";
import styles from "./Card.module.css";

export default function DetalleCard({ id }) {
  const { data, cargando } = useGet2("https://fakestoreapi.com/products/" + id);

  if (cargando) {
    return <p>Cargando detalle...</p>;
  }
  const producto = data[0] || {};
  return (
    <li className={styles.card}>
      {/*Estilo en linea
      <h3 style={styleh3}>{producto.title}</h3>*/}
      <h3 className={styles.h3}>{producto.title}</h3>
      <p>
        Precio:
        {producto.price > 100 ? producto.price + " oferta..." : producto.price}
        {producto.price > 100 && producto.price % 2 == 0 && "✅"}
      </p>
      <p>{producto.category}</p>
    </li>
  );
}
