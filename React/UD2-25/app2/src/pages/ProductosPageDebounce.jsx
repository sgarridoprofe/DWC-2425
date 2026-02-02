import React from "react";
import { useSearchParams } from "react-router";
import Navegacion from "../components/Navegacion";
import Grid from "../components/Grid";
import { useDebounce } from "../hooks/useDebounce";

export default function ProductosPageDebounce() {
  let [searchParams, setSearchParams] = useSearchParams();

  console.log("ProductosPageBusqueda de búsqueda:", searchParams.get("search"));

  const searchDebaunce = useDebounce(searchParams.get("search") || "", 1500);
  console.log("ProductosPageBusqueda de búsqueda debaunce:", searchDebaunce);

  return (
    <div>
      <Navegacion />
      <form>
        <input
          type="text"
          onChange={(e) => {
            const search = e.target.value;
            setSearchParams({ search: search });
          }}
        ></input>
      </form>
      <Grid search={searchDebaunce}></Grid>
    </div>
  );
}
