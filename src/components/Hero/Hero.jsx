import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import firstSlide from "../../images/hero-slider.jpg";
import secondSlide from "../../images/banners-sittingWomen.jpg";
import thirdSlide from "../../images/hero-slider.jpg";
import fourthSlide from "../../images/banners-sittingWomen.jpg";
import heroLine from "../../images/hero-line.svg";
import arrowLeft from "../../images/slider-arrowL.svg";
import arrowRight from "../../images/slider-arrowR.svg";
const saleFirstSlide = "30% OFF";

const slides = [
  {
    background: firstSlide,
    alt: "SUMMER SALE IMG",
    button: "SHOP NOW",
    textParts: {
      before: "SUMMER SALE GET ",
      highlight: saleFirstSlide,
      after: " ON ALL DRESS.",
    },
  },
  {
    background: secondSlide,
    text: "NEW COLLECTION LIMITED OFFER HURRY UP!",
    button: "SHOP NOW",
    alt: "NEW COLLECTION IMG",
  },
  {
    background: thirdSlide,
    text: "WINTER LOOK FRESH STYLE DON’T MISS IT.",
    button: "SHOP NOW",
    alt: "WINTER LOOK IMG",
  },
  {
    background: fourthSlide,
    text: "SPRING VIBES FEEL THE BLOOM NEW ARRIVALS!",
    button: "SHOP NOW",
    alt: "SPRING VIBES IMG",
  },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className={styles.slider}>
        <div
          className={styles.slideTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              alt={slide.alt}
              className={styles.slide}
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <img
                    src={heroLine}
                    alt="Hero line"
                    className={styles.heroLine}
                  />
                  <p className={styles.heroText}>
                    {slide.textParts ? (
                      <>
                        {slide.textParts.before}
                        <span className={styles.highlight}>
                          {slide.textParts.highlight}
                        </span>
                        {slide.textParts.after}
                      </>
                    ) : (
                      slide.text
                    )}
                  </p>
                  <button className={styles.shopNowBtn}>{slide.button}</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button onClick={prevSlide} className={styles.sliderBtn}>
            <img src={arrowLeft} className={styles.btnArrows}></img>
          </button>
          <button onClick={nextSlide} className={styles.sliderBtn}>
            <img src={arrowRight} className={styles.btnArrows}></img>
          </button>
        </div>

        <div className={styles.dots}>
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
