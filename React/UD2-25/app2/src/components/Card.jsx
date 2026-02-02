import React from "react";
import styles from "./Card.module.css";
import { NavLink } from "react-router";
import { VscDiffAdded } from "react-icons/vsc";

export default function Card({ producto, carrito, setCarrito }) {
  const styleh3 = { color: "red" };

  const addCarrito = (producto) => {
    console.log("Añadir al carrito,", producto.id);

    const nuevoCarrito = carrito.map((prod) => {
      if (prod.id === producto.id) {
        return { ...prod, cantidad: prod.cantidad + 1 };
      }
      return prod;
    });
    setCarrito(nuevoCarrito);
    console.log("nuevoCarrito,", nuevoCarrito);
  };
  // console.log("carritod en card,", carrito);

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

      <NavLink to={`/detalle/${producto.id}`}>Ver detalle</NavLink>

      <button onClick={() => addCarrito(producto)}>
        {" "}
        <VscDiffAdded />
      </button>
    </li>
  );
}
