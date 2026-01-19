import { NavLink } from "react-router";

export default function Navegacion() {
  return (
    <>
      <NavLink to="/">Home</NavLink> <br />
      <NavLink to="/receta">Recetas</NavLink> <br />
      <NavLink to="/productos">Productos</NavLink> <br />
    </>
  );
}
