import React from 'react';
import styles from '../styles/acercaDe.module.css';

const sections = [
  {
    imgSrc: "/img/montzionnuevo-1@3x.png",
    imgAlt: "Mont Zion Nuevo",
    content: [
      { subtext: "8 Principios basados en las bienaventuranzas" },
    ],
    color: "red", // Agrega el color deseado aquí
  },
  
  {
    imgSrc: "/img/footprint-1@3x.png",
    imgAlt: "Footprints",
    content: [{ subtext: "12 pasos con sustento bíblico." }],
    color: "green", // Agrega el color deseado aquí
  },

  {
    imgSrc: "/img/biblenew-1@3x.png",
    imgAlt: "Bible",
    content: [{ subtext: "Programa Cristocéntrico" }],
    color: "blue", // Agrega el color deseado aquí
  },
  
  {
    imgSrc: "/img/people-1@3x.png",
    imgAlt: "People with Hands Up",
    content: [{ subtext: "Alcanzando libertad de nuestras heridas, adicciones y complejos." }],
    color: "yellow", // Agrega el color deseado aquí
  },
];

function AcercaDe({ className = "" }) {
  return (
    <div className={`${styles.acercaDe} ${className}`}>
      <img className={styles.backgroundImage} src='/img/adoracion@2x.png' alt="Adoracion" />
      <div className={styles.grid}>
        {sections.map((section, index) => (
          <div key={index} className={`${styles.section} ${styles[section.color]} ${index === 0 ? styles.pintada : ''}`}>
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
      <div className={`${styles.description} ${styles.pintada}`}>
        <p className={styles.text}>
          Celebremos la Recuperación es un programa bíblico de 12 pasos, basado en
          las bienaventuranzas del libro de Mateo. Es para TODAS LAS PERSONAS que
          estén pasando por alguna situación que les impida vivir su vida en plenitud.
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

