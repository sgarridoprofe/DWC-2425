import React, { useState } from "react";
import SelectorCategorias from "../components/SelectorCategorias/SelectorCategorias";
import ListaSeleccionable from "../components/SelectorCategorias/ListaSeleccionable";
import SelectorBotonera from "../components/SelectorCategorias/SelectorBotonera";
import Navegacion from "../components/Navegacion";
import ListaSeleccionada from "../components/SelectorCategorias/ListaSeleccionada";

export default function SeleccionPage() {
  const [categoria, setCategoria] = useState("");
  const [seleccion, setSeleccion] = useState([]);
  return (
    <div>
      <Navegacion />

      <div style={{ justifyContent: "center" }}>
        SeleccionPage
        <SelectorCategorias setCategoria={setCategoria} />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "left",
            gap: "10px",
          }}
        >
          <ListaSeleccionable
            categoria={categoria}
            seleccion={seleccion}
            setSeleccion={setSeleccion}
          />

          <ListaSeleccionada seleccion={seleccion} />
        </div>
      </div>
    </div>
  );
}
