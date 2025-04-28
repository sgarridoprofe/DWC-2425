/* eslint-disable react/prop-types */
import styles from "./Producto.module.css";

function Producto({ producto }) {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.col}>
        <p>{producto.title}</p>
        <img
          className={producto.productoImage}
          width={200}
          height={200}
          src={producto.image}
          alt="imagen"
        ></img>
        <p>{producto.description}</p>
        <p>{producto.price > 200 ? producto.price + "✅" : producto.price} </p>
      </div>
    </div>
  );
}

export default Producto;
