import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/carouselSection.module.css";

const Content = ({ text, imageSrc, altText }) => (
  <div className={styles.contentWrapper}>
    <h1>{text}</h1>
    <img src={imageSrc} alt={altText} className={styles.icon} />
  </div>
);

const slides = [
  {
    questionParts: ['¿Has buscado soluciones pero no has encontrado respuestas?'],
    imageSrc: "/img/2sinsalida-1@2x.png",
    altText: "Sin salida"
  },
  {
    questionParts: ['¿Te gustaría gozar de una vida plena?'],
    imageSrc: "/img/2buscarespuestas-1@2x.png",
    altText: "Busca respuestas"
  },
  {
    questionParts: ['¿Estás viviendo las consecuencias de tus malas decisiones?'],
    imageSrc: "/img/2luchando-1@2x.png",
    altText: "Luchando"
  },
  {
    questionParts: ['¿Estás harto de actuar de la misma forma repetidamente?'],
    imageSrc: "/img/2diosnoseacuerda-1@2x.png",
    altText: "Dios no se acuerda"
  },
  {
    questionParts: ['¿Tienes problemas familiares?'],
    imageSrc: "/img/2cansado-1@2x.png",
    altText: "Cansado"
  }
];

const CarouselSection = () => {
  return (
    <div className={styles.carouselContainer}>
      <motion.div
        className={styles.carouselInner}
        animate={{ x: ['0%', '-100%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {slides.concat(slides).map((slide, index) => (
          <div key={index} className={styles.carouselSlide}>
            <Content
              text={slide.questionParts.join(" ")}
              imageSrc={slide.imageSrc}
              altText={slide.altText}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CarouselSection;
