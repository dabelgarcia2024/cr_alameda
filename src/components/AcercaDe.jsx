import React from 'react';
import styles from '../styles/acercaDe.module.css';

const sections = [
  {
    imgSrc: "/img/montzionnuevo-1@3x.png",
    imgAlt: "Mont Zion Nuevo",
    content: [
      { text: "8 Principios ", subtext: "basados en las bienaventuranzas" },
    ],
  },
  {
    imgSrc: "/img/biblenew-1@3x.png",
    imgAlt: "Bible",
    content: [{ text: "Programa ", subtext: "Cristocéntrico" }],
  },
  {
    imgSrc: "/img/footprint-1@3x.png",
    imgAlt: "Footprints",
    content: [{ text: "12 pasos con sustento bíblico." }],
  },
  {
    imgSrc: "/img/people-1@3x.png",
    imgAlt: "People with Hands Up",
    content: [{ text: "Alcanzando libertad de nuestras heridas, adicciones y complejos." }],
  },
];

function AcercaDe({ className = "" }) {
  return (
    <div className={`${styles.acercaDe} ${className}`}>
      <div className={styles.grid}>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <img className={styles.icon} alt={section.imgAlt} src={section.imgSrc} />
            {section.content.map((item, idx) => (
              <div key={idx} className={styles.textWrapper}>
                <p className={styles.text}>{item.text}</p>
                {item.subtext && <p className={styles.subtext}>{item.subtext}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.description}>
        <p className={styles.text}>
          Celebremos la Recuperación es un programa bíblico de 12 pasos, basado en
          las bienaventuranzas del libro de Mateo. Es para TODAS LAS PERSONAS que
          esten pasando por alguna situación que les impida vivir su vida en plenitud.
        </p>
        <p className={styles.text}>
          El propósito de Celebremos la Recuperación es celebrar el poder sanador
          de Dios en nuestras vidas al transitar acompañados en el camino a la
          restauración.
        </p>
        <p className={styles.text}>
          Formamos parte de la Iglesia Alameda, donde creemos que no hay personas
          ni familias perfectas, somos una iglesia de personas y familias
          imperfectas.
        </p>
      </div>
    </div>
  );
}

export default AcercaDe;

