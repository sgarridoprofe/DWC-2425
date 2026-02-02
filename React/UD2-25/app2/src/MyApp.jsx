import React from "react";
import Pruebas from "./pages/Pruebas";
import { Route, Routes } from "react-router";
import RecetaPage from "./pages/RecetaPage";
import ProductosPage from "./pages/ProductosPage";
import DetallePage from "./pages/DetallePage";
import HomePage from "./pages/HomePage";
import ProductosPageBusqueda from "./pages/ProductosPageBusqueda";
import PruebaParametros from "./pages/PruebaParametros";
import FormulariosPage from "./pages/FormulariosPage";
import CarritoPage from "./pages/CarritoPage";
import BusquedaDebounce from "./pages/BusquedaDebounce";
import ProductosPageDebounce from "./pages/ProductosPageDebounce";
import LoginPage from "./pages/LoginPage";
import SeleccionPage from "./pages/SeleccionPage";

export default function MyApp() {
  const v = 6;
  console.log(`MyApp component rendered ${v}`);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pruebas" element={<Pruebas />} />
        <Route path="/receta" element={<RecetaPage />} />
        <Route path="/productos" element={<ProductosPageBusqueda />} />
        <Route path="/detalle/:id" element={<DetallePage />} />
        <Route path="/parametros" element={<PruebaParametros />} />
        <Route path="/formularios" element={<FormulariosPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="/debaunce" element={<ProductosPageDebounce />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/seleccion" element={<SeleccionPage />} />
      </Routes>
    </div>
  );
}
