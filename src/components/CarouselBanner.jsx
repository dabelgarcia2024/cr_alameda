// CarouselBanner.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carouselBanner.module.css"

const images = [
  { src: '/img/2buscarespuestas-1@2x.png', text: 'Texto 1' },
  { src: '/img/2cansado-1@2x.png', text: 'Texto 2' },
  { src: '/img/2diosnoseacuerda-1@2x.png', text: 'Texto 3' },
  { src: '/img/2luchando-1@2x.png', text: 'Texto 4' },
  { src: '/img/2sinsalida-1@2x.png', text: 'Texto 5' }
];

const CarouselBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.src} alt={`slide-${index}`} />
            <div className="carousel-text">{image.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselBanner;
