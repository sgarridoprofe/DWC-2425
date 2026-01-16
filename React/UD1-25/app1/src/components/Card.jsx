import React from "react";
import styles from "./Card.module.css";

export default function Card({ producto }) {
  const styleh3 = { color: "red" };

  return (
    <li>
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
