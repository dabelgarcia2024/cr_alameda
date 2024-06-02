import React, { useState } from "react";
import styles from "../styles/navbar.module.css";

function Navbar({ className = "" }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

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
            <li><a href="https://alameda.ar/ofrenda">DAR</a></li>
            <li><a href="https://alameda.ar/notas">NOTAS DEL MENSAJE</a></li>
            <li><a href="https://alameda.ar/mensajes">SERIES</a></li>
            <li><a href="https://alameda.ar/oracion">ORACIÓN</a></li>
            <li><a href="https://alameda.ar/contacto">TARJETA DE CONEXIÓN</a></li>
            <li className={styles.dropdown}>
              <button onClick={toggleDropdown} className={styles.dropdownToggle}>
              <img
                  className={styles.dropdownIcon}
                  loading="lazy"
                  alt="flecha hacia abajo"
                  src="/img/angle-down-9-16.png"
                />
                MÁS
              </button>
              {dropdownVisible && (
                <ul className={styles.dropdownMenu}>
                  <li className={styles.dropdownItem}><a href="https://alameda.ar/avanza">AVANZA</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;