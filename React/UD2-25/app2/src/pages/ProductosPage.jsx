import React from "react";
import Grid from "../components/Grid";
import { useSearchParams } from "react-router";
import Navegacion from "../components/Navegacion";

export default function ProductosPage() {
  return (
    <div>
      <Navegacion />
      <Grid></Grid>
    </div>
  );
}
