import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import { Container } from "../Container/Container";
import firstSlide from "../../images/Hero/hero-slider.jpg";
import firstSlideMob from "../../images/Hero/mobileHero-slider.jpg";
import secondSlide from "../../images/banners-sittingWomen.jpg";
import thirdSlide from "../../images/Hero/hero-slider.jpg";
import fourthSlide from "../../images/banners-sittingWomen.jpg";
import heroLine from "../../images/Hero/hero-line.svg";
const saleFirstSlide = "30% OFF";

const slides = [
  {
    background: firstSlide,
    mobileBackground: firstSlideMob,
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
    mobileBackground: secondSlide,
    text: "NEW COLLECTION LIMITED OFFER!",
    button: "SHOP NOW",
    alt: "NEW COLLECTION IMG",
  },
  {
    background: thirdSlide,
    mobileBackground: thirdSlide,
    text: "WINTER LOOK FRESH STYLE.",
    button: "SHOP NOW",
    alt: "WINTER LOOK IMG",
  },
  {
    background: fourthSlide,
    mobileBackground: fourthSlide,
    text: "FEEL THE BLOOM NEW ARRIVALS!",
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
    const timer = setTimeout(() => {
      nextSlide();
    }, 13000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Container>
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
              style={{
                "--bg-desktop": `url(${slide.background})`,
                "--bg-mobile": `url(${slide.mobileBackground})`,
              }}
            >
              <div className={styles.overlay}>
                <div className={styles.sliderContent}>
                  <img
                    src={heroLine}
                    alt="Hero line"
                    className={styles.sliderContent_line}
                  />
                  <p className={styles.sliderContent_text}>
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
                  <button className={styles.sliderContent_buyBtn}>
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button onClick={prevSlide} className={styles.sliderBtn}>
            <span className={`${styles.arrow} ${styles.left}`}></span>
          </button>
          <button onClick={nextSlide} className={styles.sliderBtn}>
            <span className={`${styles.arrow} ${styles.right}`}></span>
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
    </Container>
  );
};
