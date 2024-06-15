import React, { useState } from "react";
import styles from "../styles/contactenos.module.css";

function Contactenos({ className = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost/sendEmail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(formData).toString()
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        alert("Email enviado exitosamente.");
      } else {
        alert("Error al enviar el email: " + data.message);
      }
    })
    .catch(error => {
      alert("Error al enviar el email: " + error.message);
    });
  };

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
          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Nombre y Apellido:</label>
              <input
                className={styles.input}
                type="text"
                id="name"
                placeholder="Nombre y Apellido"
                value={formData.name}
                onChange={handleChange}
              />
              <label className={styles.label} htmlFor="email">Email:</label>
              <input
                className={styles.input}
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <label className={styles.label} htmlFor="phone">Teléfono:</label>
              <input
                className={styles.input}
                type="tel"
                id="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.messageContainer}>
              <textarea
                className={styles.textArea}
                rows={11}
                cols={22}
                id="message"
                placeholder="Tu mensaje aquí..."
                value={formData.message}
                onChange={handleChange}
              />
              <button className={styles.submitButton} type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactenos;
