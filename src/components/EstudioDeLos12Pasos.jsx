import React from "react";
import Slider from "react-slick";
import styles from "../styles/estudioDeLos12Pasos.module.css";

const QuestionSection = ({ slides }) => (
  <div className={styles.questionSection}>
    <Slider {...{dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1}}>
      {slides.map((slide, index) => (
        <div key={index} className={styles.slide}>
          <div className={styles.textWrapper}>
            {slide.questionParts.map((part, index) => (
              <p key={index} className={styles.question}>
                {part}
              </p>
            ))}
          </div>
          <img className={styles.icon} loading="lazy" alt={slide.altText} src={slide.imageSrc} />
        </div>
      ))}
    </Slider>
  </div>
);
