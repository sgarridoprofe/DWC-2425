import { Link } from "react-router";

function Navegador() {
  let id = 3;
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to={`/carrusel/${id}`}>Carrusel</Link>
      </nav>
    </>
  );
}

export default Navegador;
