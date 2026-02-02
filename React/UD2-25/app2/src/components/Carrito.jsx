import React from "react";
import { VscDiffAdded } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Carrito() {
  const [carrito, setCarrito] = React.useState([
    {
      id: 1,
      title: "Soporte TV 23 a 75",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      precio: 29.99,
      cantidad: 1,
    },
    {
      id: 2,
      title: "Teclado Inalámbrico",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      precio: 16.99,
      cantidad: 1,
    },
  ]);

  return (
    <div>
      <div>Carrito</div>
      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} width="35" />
            <span>{item.title}</span> -<span> Precio: ${item.precio}</span> -
            <span> Cantidad: {item.cantidad}</span>
            <span>
              <button
                onClick={() => {
                  const nuevoCarrito = carrito.map((prod) => {
                    if (prod.id === item.id) {
                      return { ...prod, cantidad: prod.cantidad + 1 };
                    }
                    return prod;
                  });
                  setCarrito(nuevoCarrito);
                }}
              >
                <VscDiffAdded />
              </button>
            </span>
            <button
              onClick={() => {
                const nuevoCarrito = carrito.map((prod) => {
                  if (prod.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad - 1 };
                  }
                  return prod;
                });
                setCarrito(nuevoCarrito);
              }}
            >
              <RiDeleteBin6Line />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
