import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    resetTimer();
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselInner}>
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ type: "tween", duration: 0.5 }}
            className={styles.carouselSlide}
          >
            <Content
              text={slides[currentSlide].questionParts.join(" ")}
              imageSrc={slides[currentSlide].imageSrc}
              altText={slides[currentSlide].altText}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              marginLeft: "5px",
              cursor: "pointer",
              fontSize: currentSlide === index ? "10px" : "5px",
              color: currentSlide === index ? "salmon" : "teal",
              textShadow: "0 3px 3px mistyrose",
            }}
          >
            &#9679;
          </span>
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;
