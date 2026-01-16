import React from "react";
import Card from "./Card";
import db from "../json/dbFakestoreapi.json";

export default function Grid() {
  const arProductos = ["Producto 1", "Producto 2", "Producto 3"];
  console.log(db.productos);
  return (
    <>
      <ul>
        Lista de productos
        {db.productos.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))}
      </ul>
    </>
  );
}
