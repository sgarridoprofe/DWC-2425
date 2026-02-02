import React from "react";
import Navegacion from "../components/Navegacion";
import FormularioArticulo from "../components/FormularioArticulo";
import FormReactHookForm from "../components/FormReactHookForm";

export default function FormulariosPage() {
  return (
    <>
      <Navegacion />

      <div>Ejemplo de formularios</div>
      <FormularioArticulo />
      <br />
      <FormReactHookForm />
    </>
  );
}
