import { useEffect, useState } from "react";
import catalogData from "../../data/catalog-data.js";
import styles from "./SpecialList.module.scss";
import { Container } from "../Container/Container.jsx";

const SpecialList = ({ title }) => {
  const [seeMoreActive, setSeeMoreActive] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isDesktop, setIsDesktop] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      const desktop = window.innerWidth >= 1200;
      setIsDesktop(desktop);
      if (desktop) {
        setSeeMoreActive(false);
        setVisibleCount(5);
        setStartIndex(0);
      } else {
        setSeeMoreActive(true);
        setVisibleCount(4);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleSeeMore = () => {
    const newCount = visibleCount + 4;
    setVisibleCount(Math.min(newCount, catalogData.length));
  };

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex + visibleCount >= catalogData.length;

  const handlePrev = () => {
    if (!isPrevDisabled) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isNextDisabled) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const currentItems = isDesktop
    ? catalogData.slice(startIndex, startIndex + visibleCount)
    : catalogData.slice(0, visibleCount);
  const isSeeMoreHidden = visibleCount >= catalogData.length;

  return (
    <section className={styles.special}>
      <Container>
        <div className={styles.special__container}>
          <h2 className={styles.special__title}>{title}</h2>

          {isDesktop && (
            <div>
              <button
                className={styles.special__button}
                onClick={handlePrev}
                disabled={isPrevDisabled}
              >
                <div className={`${styles.arrow} ${styles.arrow__left}`}></div>
              </button>
              <button
                className={styles.special__button}
                onClick={handleNext}
                disabled={isNextDisabled}
              >
                <div className={`${styles.arrow} ${styles.arrow__right}`}></div>
              </button>
            </div>
          )}
        </div>

        <ul className={styles.special__list}>
          {currentItems.map((item, index) => (
            <li className={styles.special__item} key={index}>
              <a>
                <img
                  className={styles.special__image}
                  src={item.img}
                  alt={item.name}
                />
                <div className={styles.special__info}>
                  <p className={styles.special__top}>{item.top}</p>
                  <h3 className={styles.special__name}>{item.name}</h3>
                  <p className={styles.special__price}>{item.price}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {!isSeeMoreHidden && (
          <button onClick={handleSeeMore} className={styles.special__moreBtn}>
            See More
          </button>
        )}
      </Container>
    </section>
  );
};

export default SpecialList;
