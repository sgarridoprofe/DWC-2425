import Item from "./Item";
import styles from "./ItemGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpCliente.js";
import { Alert, Box, CircularProgress, Stack } from "@mui/material";
import { FiltrosItemGrid } from "./FiltrosItemGrid.jsx";
import { useQuery } from "../hooks/useQuery.jsx";
import { useDebounce } from "../hooks/useDebounce.jsx";
import datoscarrito from "../datos/datoscarrito.json";
import ItemCarrito from "./ItemCarrito.jsx";

export function CarritoGrid() {
  const [isLoading, setLoading] = useState(false);
  const [productos, setProductos] = useState(datoscarrito);

  const query = useQuery();
  console.log("query", query);

  const filtro = query.get("search");
  const categoria = query.get("categoria");
  console.log("filtro-categoria", filtro, categoria);

  /* En caso de llamada para obtener datos del carrito */
  // useEffect(() => {
  //   let url = "https://fakestoreapi.com/carts/5";
  //   get(url)
  //     .then((data) => {
  //       console.log("data get fetch", data);
  //       setLoading(false);
  //       /* la api no tiene filtro, filtramos manualmente, pero debería ser mediante llamada a la api*/
  //       // data = data.filter((word) => word.title.length > 20);
  //       setProductos([...data]);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

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
            <ItemCarrito key={producto.id} producto={producto} productos={productos} setProductos={setProductos}></ItemCarrito>
            // <li key={producto.title}>{producto.title}</li>
          ))}
        </ul>
      </Box>
    </>
  );
}
