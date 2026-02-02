import React from "react";
import Grid from "../components/Grid";
import { useSearchParams } from "react-router";
import Navegacion from "../components/Navegacion";

export default function ProductosPageBusqueda() {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log("ProductosPageBusqueda renderizado");
  console.log("ProductosPageBusqueda de búsqueda:", searchParams.get("search"));

  const [carrito, setCarrito] = React.useState([
    {
      id: 1,
      title: "Soporte TV 23 a 75",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      precio: 29.99,
      cantidad: 1,
    },
    {
      id: 2,
      title: "Teclado Inalámbrico",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      precio: 16.99,
      cantidad: 1,
    },
  ]);

  return (
    <div>
      <Navegacion />
      <form>
        <input type="text"></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            const form = e.target.closest("form");
            const search = form.querySelector("input").value;
            setSearchParams({ search: search });
          }}
        >
          Buscar
        </button>
      </form>
      <Grid
        search={searchParams.get("search") || ""}
        carrito={carrito}
        setCarrito={setCarrito}
      ></Grid>
    </div>
  );
}
