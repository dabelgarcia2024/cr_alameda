import React from "react";
import CarouselSection from "./CarouselSection";
import styles from "../styles/estudioDeLos12Pasos.module.css";

function EstudioDeLos12Pasos({ className = "" }) {
  return (
    <nav className={className}>
      <div className={`${styles.estudioDeLos12Pasos} ${className}`}>
        <div className={styles.questionsContainer}>
          <CarouselSection />
        </div>
        <div className={styles.studyInfoContainer}>
          <div className={styles.textWrapper}>
            <p className={styles.description}>
              El estudio de los 12 pasos es el corazón del programa Celebremos
              la Recuperación. Aquí es donde se realiza el trabajo difícil de
              la recuperación de un individuo. Esperamos que todos los
              participantes de este ministerio completen un Estudio de los 12
              Pasos por lo menos una vez.
            </p>
            <p className={styles.subtitle}>¿Qué es el estudio de los pasos?</p>
            <p className={styles.description}>
              El grupo de Estudio de los 12 Pasos, en uno de los dos grupos
              pequeños de Celebremos la Recuperación. Se reúnen en diferentes
              horarios que nuestro Grupo Grande y grupos de Charlas Abiertas.
              El grupo de Estudio de los 12 Pasos completa las cuatro Guías
              del Participante de Celebremos la Recuperación juntos. Responde
              y dialoga las preguntas al final de cada lección. El grupo de
              Estudio de los 12 Pasos se reúnen durante doce meses. Los grupos
              se separan para hombres y mujeres.
            </p>
            <p className={styles.description}>
              El Estudio de los 12 Pasos es donde nos adentramos al corazón
              del programa y es donde toma lugar la sanidad de las heridas,
              hábitos y complejos de la vida.
            </p>
          </div>
          <img
            className={styles.icon}
            loading="lazy"
            alt="Hombre escalera"
            src="/img/gettyimages535666233-1@3x.png"
          />
        </div>
      </div>
    </nav>
  );
}

export default EstudioDeLos12Pasos;
    