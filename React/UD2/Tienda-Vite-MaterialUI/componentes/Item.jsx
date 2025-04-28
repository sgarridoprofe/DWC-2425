/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import styles from "./Item.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const handleclickAdd = (item) => {
  alert("add item...." + item.title);
};

function Item({ producto }) {
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
        <p>
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => handleclickAdd(producto)}
          >
            Añadir
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Item;
