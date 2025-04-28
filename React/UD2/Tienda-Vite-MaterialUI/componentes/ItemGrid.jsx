import Item from "./Item";
import React from "react";
import styles from "./ItemGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpCliente.js";
import { Alert, Box, CircularProgress, Stack } from "@mui/material";
import { FiltrosItemGrid } from "./FiltrosItemGrid.jsx";
import { useQuery } from "../hooks/useQuery.jsx";
import { useDebounce } from "../hooks/useDebounce.jsx";

function ItemGrid() {
  const [isLoading, setLoading] = useState(true);
  const [productos, setProductos] = useState(null);

  const query = useQuery();
  console.log("query", query);

  const filtro = query.get("search");
  const categoria = query.get("categoria");
  console.log("filtro-categoria", filtro, categoria);

  const debouncedFiltro = useDebounce(filtro, 500);

  /* compruebo la búsqueda */
  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    console.log(categoria, filtro);
    if (categoria)
      url = "https://fakestoreapi.com/products/category/" + categoria;

    get(url)
      .then((data) => {
        console.log("data get fetch", data);
        setLoading(false);
        /* la api no tiene filtro, filtramos manualmente, pero debería ser mediante llamada a la api*/
        // data = data.filter((word) => word.title.length > 20);
        if (filtro && filtro.length > 0)
          data = data.filter((item) => item.title.includes(filtro));
        console.log("Filtrando... por  filtro " + filtro);
        setProductos([...data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [categoria, debouncedFiltro]);

  if (isLoading) {
    return (
      <>
        <Stack alignItems="center">
          <CircularProgress size={50} disableShrink />;
        </Stack>
        {/* <Box display="flex" width={500} height={80} bgcolor="lightblue">
          {" "}
          <Box m="auto">1. Box (margin: auto)</Box>
        </Box> */}
      </>
    );
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <FiltrosItemGrid></FiltrosItemGrid>
        <ul className={styles.itemGrid}>
          {productos.map((producto) => (
            <Item key={producto.id} producto={producto}></Item>
            // <li key={producto.title}>{producto.title}</li>
          ))}
        </ul>
      </Box>
    </>
  );
}

export default ItemGrid;
