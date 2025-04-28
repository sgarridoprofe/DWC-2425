import { useParams } from "react-router";
import Navegador from "../Componentes/Navegador";

function Detalle() {
  const { itemId } = useParams();
  return (
    <>
      <Navegador></Navegador>
      Detalle {itemId}
    </>
  );
}

export default Detalle;
