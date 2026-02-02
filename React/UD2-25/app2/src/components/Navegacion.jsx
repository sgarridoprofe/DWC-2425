import { NavLink } from "react-router";
import styles from "./Navegacion.module.css";

export default function Navegacion() {
  return (
    <ul className={styles.navbar}>
      <li className={styles.navLinks}>
        <NavLink to="/">Home</NavLink>
      </li>
      <br />
      <li className={styles.navLinks}>
        <NavLink to="/productos">Productos</NavLink>
      </li>
      <li className={styles.navLinks}>
        <NavLink to="/receta">Recetas</NavLink>
      </li>
      <li className={styles.navLinks}>
        <NavLink to="/pruebas">Pruebas</NavLink>
      </li>
      <li className={styles.navLinks}>
        <NavLink to="/parametros">Parametros</NavLink>
      </li>
      <li className={styles.navLinks}>
        <NavLink to="/formularios">Formularios</NavLink>
      </li>
      <li className={styles.navLinks}>
        <NavLink to="/carrito">Carrito</NavLink>
      </li>
      <li className={styles.navLinks}>
        <NavLink to="/debaunce">Debaunce</NavLink>
      </li>
      <li className={styles.navLinks}>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className={styles.navLinks}>
        <NavLink to="/seleccion">Seleccion</NavLink>
      </li>
    </ul>
  );
}
