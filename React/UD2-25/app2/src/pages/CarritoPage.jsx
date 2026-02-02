import React from "react";
import Carrito from "../components/Carrito";
import Navegacion from "../components/Navegacion";

export default function CarritoPage() {
  return (
    <div>
      <Navegacion />
      <div>Demostración del carrito</div>
      <Carrito />
    </div>
  );
}
