import React from "react";
import styles from "../styles/contactenos.module.css";

function Contactenos({ className = "" }) {
  return (
    <div className={`${styles.contactenos} ${className}`}>
      <div className={styles.imageContainer}>
        <img
          className={styles.backgroundImage}
          loading="lazy"
          alt="background"
          src="/img/oip-1@3x.png"
        />
        <div className={styles.overlayText}>
          <p className={styles.parrafoUno}>viviendo un</p>
          <p className={styles.parrafoDos}>dia a la vez</p>
        </div>
      </div>
      <div className={styles.formContainer}>
  <div className={styles.left}>
    <h2 className={styles.title}>Escríbenos, estamos para servirte.</h2>
    <p className={styles.introText}>
      Permítenos servirte, mándanos un mensaje con tus preguntas o dudas,
      con gusto las responderemos a la brevedad posible.
    </p>
  </div>
  <div className={styles.right}>
    <div className={styles.field}>
      <label className={styles.label} htmlFor="name">Nombre y Apellido:</label>
      <input className={styles.input} type="text" id="name" placeholder="Nombre y Apellido" />
      <label className={styles.label} htmlFor="email">Email:</label>
      <input className={styles.input} type="email" id="email" placeholder="Email" />
      <label className={styles.label} htmlFor="phone">Teléfono:</label>
      <input className={styles.input} type="tel" id="phone" placeholder="Teléfono" />
    </div>
    <div className={styles.messageContainer}>
      <textarea className={styles.textArea} rows={11} cols={22} placeholder="Tu mensaje aquí..." />
      <button className={styles.submitButton}>Enviar</button>
    </div>
  </div>
  </div>
  </div>
  );
}

export default Contactenos;
