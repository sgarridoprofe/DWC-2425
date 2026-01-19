import React from "react";
import Pruebas from "./pages/Pruebas";
import { Route, Routes } from "react-router";
import RecetaPage from "./pages/RecetaPage";
import ProductosPage from "./pages/ProductosPage";
import DetallePage from "./pages/DetallePage";

export default function MyApp() {
  const v = 6;
  console.log(`MyApp component rendered ${v}`);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pruebas />} />
        <Route path="/receta" element={<RecetaPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/detalle/:id" element={<DetallePage />} />
      </Routes>
    </div>
  );
}
