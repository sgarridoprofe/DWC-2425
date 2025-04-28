import productos from "../datos/productos.json";
import Producto from "./Producto.jsx";
import styles from "./ProductosList.module.css";

// export function ProductosList() {
//   const productosJSX = [];
//   const p1=<Producto producto={productos[0]}></Producto>

//   productosJSX.push(<Producto producto={productos[0]}></Producto>);

//   productos.forEach((producto) => console.log(producto));

//   return <>{productosJSX}</>;
// }

// function ProductosList2() {
//   const listaProductos = [];
//   productos.forEach((producto) => {
//     console.log(producto);
//     listaProductos.push(
//       <Producto
//         producto={{
//           title: producto.title,
//           description: producto.description,
//           price: producto.price,
//         }}
//       ></Producto>
//     );
//   });

//   return (
//     <>
//       <Producto
//         producto={{
//           title: "Raton",
//           description: "Tecknet Xt",
//           price: 16,
//         }}
//       ></Producto>
//       {listaProductos}
//     </>
//   );
// }

function ProductosList() {
  return (
    
    <ul className={styles.productosGrid}>
      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto}></Producto>
        // <li key={producto.title}>{producto.title}</li>
      ))}
    </ul>
  );
}

export default ProductosList;
