import Boton from "../Componentes/Boton";
import Cabecera from "../Componentes/Cabecera";
import Carrusel from "../Componentes/Carrusel";
import Contador from "../Componentes/Contador";
import EjemploUseEffect from "../Componentes/EjemploUseEffect";
import Filtro from "../Componentes/Filtro";
import Navegador from "../Componentes/Navegador";
import Parrafo from "../Componentes/Parrafo";
import Producto from "../Componentes/Producto";
import ProductosList from "../Componentes/ProductosList";
import Tareas from "../Componentes/Tareas";

function MyApp() {
  const objProducto1 = {
    title: "teclado",
    description: "Logitech 915",
    price: 21,
  };
  return (
    <>
      <Navegador></Navegador>
      {/* <Carrusel></Carrusel> */}
      <div></div>
      <EjemploUseEffect></EjemploUseEffect>

      <Cabecera titulo={"Cabecera Ejemplo"} color={"blue"}>
        LISTADO DE PRODUCTOS
      </Cabecera>

      <Filtro></Filtro>
      <Parrafo> Parrafo 1</Parrafo>
      <Contador></Contador>
      <p></p>
      <Tareas></Tareas>
      <Producto producto={objProducto1}></Producto>
      <Producto
        producto={{
          title: "Raton",
          description: "Tecknet Xt",
          price: 16,
        }}
      ></Producto>
      <ProductosList></ProductosList>
    </>
  );
}

export default MyApp;
