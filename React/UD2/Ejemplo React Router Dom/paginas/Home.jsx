import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
        <div>
            <p>Bienvenido a mi página web de productos. Aprendiendo a usar route y generar detalles <br /> a partir de un producto pasado por id en la ruta.</p>
        </div>
    </div>
  )
}
