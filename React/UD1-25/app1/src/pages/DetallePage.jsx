import React from "react";
import { useParams } from "react-router";

export default function DetallePage() {
  const { id } = useParams();
  return <div>DetallePage {id}</div>;
}
