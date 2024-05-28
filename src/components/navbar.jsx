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
            <li><a href="#dar">DAR</a></li>
            <li><a href="#notas-del-mensaje">NOTAS DEL MENSAJE</a></li>
            <li><a href="#series">SERIES</a></li>
            <li><a href="#oracion">ORACIÓN</a></li>
            <li><a href="#tarjeta-de-conexion">TARJETA DE CONEXIÓN</a></li>
            <li><a href="#mas">MÁS</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
