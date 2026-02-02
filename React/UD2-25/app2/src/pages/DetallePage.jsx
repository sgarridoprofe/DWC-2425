import React from "react";
import { useParams } from "react-router";
import DetalleCard from "../components/DetalleCard";

export default function DetallePage() {
  const { id } = useParams();
  return (
    <div>
      DetallePage {id}
      <DetalleCard id={id} />
    </div>
  );
}
