import React from "react";
import Slider from "react-slick";
import styles from "../styles/questionSection.module.css";

const QuestionSection = ({ slides }) => (
  <div className={styles.questionSection}>
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={3000}
    >
      {slides.map((slide, index) => (
        <div key={index} className={styles.slide}>
          <div className={styles.textWrapper}>
            {slide.questionParts.map((part, partIndex) => (
              <p key={partIndex} className={styles.question}>
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

export default QuestionSection;
