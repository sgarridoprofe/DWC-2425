import React, { useState } from "react";
import { useSearchParams } from "react-router";
import Navegacion from "../components/Navegacion";
import Grid from "../components/Grid";
import { useDebounce } from "../hooks/useDebounce";

export default function BusquedaDebounce() {
  let [searchParams, setSearchParams] = useSearchParams();

  console.log("BusquedaDebounce:", searchParams.get("search"));

  const debaunceSearch = useDebounce(searchParams.get("search") || "", 2000);

  return (
    <div>
      <Navegacion />
      <form>
        <input
          type="text"
          onChange={(e) => {
            const busqueda = e.target.value;
            setSearchParams({ search: busqueda });
          }}
        ></input>
      </form>
      {/* <Grid search={searchParams.get("search") || ""}></Grid> */}
      <Grid search={debaunceSearch}></Grid>
    </div>
  );
}
