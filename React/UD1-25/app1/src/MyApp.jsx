import React from "react";
import Pruebas from "./pages/Pruebas";

export default function MyApp() {
  const v = 6;
  console.log(`MyApp component rendered ${v}`);
  return (
    <div>
      Hola mundo {v}
      <Pruebas />
    </div>
  );
}
