import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import MyApp from "./MyApp.jsx";
import Carrusel from "../Componentes/Carrusel.jsx";
import Home from "../Paginas/Home.jsx";
import Detalle from "../Paginas/Detalle.jsx";

// createRoot(document.getElementById("root")).render(<MyApp />);

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrusel/:itemId" element={<Detalle />} />
    </Routes>
  </BrowserRouter>
);
