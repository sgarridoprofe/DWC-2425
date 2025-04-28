import { Badge, Button, IconButton } from "@mui/material";
import styles from "./Item.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const handleclickAdd = (item) => {
  alert("add item...." + item.title);
};

const handleModProducto = (producto, productos, setProductos, unidades) => {
  var productoIndex = productos.findIndex((x) => x.id == producto.id);
  productos[productoIndex].unidades =
    parseInt(productos[productoIndex].unidades) + parseInt(unidades);

  if (productos[productoIndex].unidades == 0)
    productos.splice(productoIndex, 1);

  console.log("productoIndex", productoIndex);
  setProductos([...productos]);

  //   const modiProductos = productos.map(productoItem => {
  //     if (productoItem.id === producto.id) {
  //         return { ...productoItem, unidades: 3 };
  //     }
  //     return productoItem;
  // });
};

function ItemCarrito({ producto, productos, setProductos }) {
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
        <p>
          {producto.price > 200 ? producto.price + "✅" : producto.price}
          {" € "}
        </p>
        <p>{producto.unidades}</p>
        <p>
          <IconButton
            size="medium"
            aria-label="show 4 new productos"
            color="primary"
            onClick={() =>
              handleModProducto(producto, productos, setProductos, -1)
            }
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          {"  " + producto.unidades + " "}
          <IconButton
            size="medium"
            aria-label="show 4 new productos"
            color="primary"
            onClick={() =>
              handleModProducto(producto, productos, setProductos, 1)
            }
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </p>
      </div>
    </div>
  );
}

export default ItemCarrito;
