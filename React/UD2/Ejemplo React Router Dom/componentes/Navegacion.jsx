import { Link } from "react-router";

export default function Navegacion() {
  return (
    <>
      <Link to="/">Home</Link> <br />
      <Link to="/ofertas">Ofertas</Link> <br />
      <Link to="/detalle">Detalle</Link> <br />
      <Link to="/formularios">Formularios</Link> <br />
    </>
  );
}
