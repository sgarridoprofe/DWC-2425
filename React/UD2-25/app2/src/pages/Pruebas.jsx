import React from "react";
import Grid from "../components/Grid";
import Contador from "../components/Contador";
import ContadorClase from "../components/ContadorClase";
import Navegacion from "../components/Navegacion";

const devuelveProductos = async () => {
  const API_URL = "https://fakestoreapi.com/products";
  //const charactersP = await getAPI(API_URL);

  /*const charactersP=await fetch(API_URL).then((result) => result.json())  ;
    console.log('charactersP',charactersP);
    generaCardsPersonajes(charactersP.items);*/

  const items = await fetch(API_URL).then((result) => result.json());
  console.log("items", items);

  return items;
};

export default function Pruebas() {
  const productos = devuelveProductos();
  return (
    <>
      <Navegacion />
      <div>Página de Pruebas</div>
      <div>
        <ContadorClase />
      </div>
    </>
  );
}
