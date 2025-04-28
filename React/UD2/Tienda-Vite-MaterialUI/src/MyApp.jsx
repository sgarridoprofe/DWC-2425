import { Route, Routes } from "react-router";

import NavBar from "../componentes/NavBar";
import Principal from "../paginas/Principal";
import Productos from "../paginas/Productos";
import { useState } from "react";
import { CarritoGrid } from "../componentes/CarritoGrid";
import CarritoPagina from "../paginas/Carritopagina";

export default function Myapp() {
  const [carrito, setCarrito] = useState([]);

  /* https://community.listopro.com/realiza-un-carrito-de-compras-con-react/ */
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/productos" element={<Productos />} />
        <Route
          path="/productos2"
          element={<Productos carrito={carrito} setCarrito={setCarrito} />}
        />
        <Route path="/carrito" element={<CarritoPagina />} />
        {/* <Route path="/detalle/:id" element={<Detalle />} /> */}
        {/* <Route path="/ofertas" element={<Carrusel />} /> */}
      </Routes>
    </>
  );
}
