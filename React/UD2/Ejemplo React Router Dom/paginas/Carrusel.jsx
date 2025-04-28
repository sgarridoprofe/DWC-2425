import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./Carrusel.module.css";
/* import datos from "../datos/productos.json" */

export default function Carrusel() {
    const [indice, setIndice] = useState(1);
    const [producto, setProducto] = useState({});
    useEffect(() => {
        document.title = indice;
        localStorage.setItem("indice", indice);
        fetch(`https://fakestoreapi.com/products/${indice}`)
            .then(res => res.json())
            .then(json => setProducto(json));
        console.log('Ejecutando UseEffect');
    }, [indice]);
    return (
        <>
            <div className={styles.carrusel}>
                {console.log('Renderizando Componente')}
                {/* {console.log(datos)} */}
                <p>{producto.title}</p>
                <p className={styles.img}>
                    <Link to={"/detalle/" + producto.id}>
                        <img src={producto.image} />
                    </Link>
                </p>
                <div>
                    {/* <p>{producto.price} €</p> */}
                    {indice > 1 && <button onClick={() => (
                        setIndice(indice - 1)
                    )}>{"<"}</button>}
                    {indice < 20 && <button onClick={() => (
                        setIndice(indice + 1)
                    )}>{">"}</button>}
                </div>
            </div>
        </>
    )
};
