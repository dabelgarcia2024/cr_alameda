import React from "react";
import styles from "../styles/navCele.module.css";

function NavCele({ className = "" }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={className}>
      <section className={`${styles.navCele} ${className}`}>
         <div className={styles.navCeleInner}>
          <div className={styles.navLinks}>
            <h2>
              <a href="#acerca-de" className={styles.navLink}>
                ACERCA DE
              </a>
            </h2>
            <h2>
              <a href="#estudio-de-los-12-pasos" className={styles.navLink}>
                ESTUDIO DE LOS 12 PASOS
              </a>
            </h2>
            <h2>
              <a href="#contactenos" className={styles.navLink}>
                CONTÁCTENOS
              </a>
            </h2>
          </div>
        </div>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
        <button className={styles.scrollToTop} onClick={scrollToTop} />
      </section>
    </nav>
  );
}

export default NavCele;
