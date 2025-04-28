import { Route, Routes } from "react-router";
import Navegacion from "../componentes/Navegacion";
import Carrusel from "../paginas/Carrusel";
import Home from "../paginas/Home";
import Detalle from "../paginas/Detalle";
import styles from "./Myapp.module.css";
import Formularios from "../paginas/Formularios";

export default function Myapp() {
  return (
    <>
      <header className={styles.header}>
        <Navegacion></Navegacion>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/ofertas" element={<Carrusel />} />
        <Route path="/formularios" element={<Formularios />} />
      </Routes>
    </>
  );
}
