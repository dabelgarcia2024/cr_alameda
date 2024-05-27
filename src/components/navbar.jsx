import React from "react";
import styles from "../styles/navbar.module.css";

function Navbar({ className = "" }) {
  return (
    <nav className={`${styles.navbar} ${className}`}>
      <div className={styles.frameParent}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt="Logo"
            src="/img/logoconnombre@3x.png"
          />
        </div>
        <div className={styles.navigation}>
          <ul className={styles.navList}>
            <li><a href="#dar">Dar</a></li>
            <li><a href="#notas-del-mensaje">Notas del Mensaje</a></li>
            <li><a href="#series">Series</a></li>
            <li><a href="#oracion">Oración</a></li>
            <li><a href="#tarjeta-de-conexion">Tarjeta de Conexión</a></li>
            <li><a href="#mas">Más</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
