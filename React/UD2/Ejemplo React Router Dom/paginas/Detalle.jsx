import { Link, useParams } from "react-router";
import styles from "./Detalle.module.css";
import { useEffect, useState } from "react";

export default function Detalle() {
    const { id } = useParams();
    const [producto, setProducto] = useState({});

    let cargando = true;
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProducto(json));
        cargando = false;
    }, [id]);



    return (
        <>
            <div className={styles.detalle}>
                <div>
                    <h2>{producto.title}</h2>
                    <p><b>Category:</b> {producto.category}</p>
                    <img src={producto.image} alt={producto.title} />
                    <p><b>Description: </b>{producto.description}</p>
                    <p><b>Price: </b>{producto.price} €</p>
                    {/* <p>
                        <b>Rating: {producto.rating.rate}</b> <br />
                        <b>Votos totales: {producto.rating.count}</b>
                    </p> */}
                </div>
                <Link to={"/ofertas"}>
                    Volver
                </Link>
            </div>
        </>
    )
};
