import { useEffect, useRef } from "react";
import { FiltrName } from "./Filtration-Components/FiltrationName.jsx";
import "./Filtration.scss";
import arrowDown from "../../../images/arrow-down.svg";

export const Filtration = () => {
  const fromSliderRef = useRef(null);
  const toSliderRef = useRef(null);
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);

  useEffect(() => {
    const fromSlider = fromSliderRef.current;
    const toSlider = toSliderRef.current;
    const fromInput = fromInputRef.current;
    const toInput = toInputRef.current;

    const updateFromSlider = () => controlFromSlider(fromSlider, toSlider, fromInput);
    const updateToSlider = () => controlToSlider(fromSlider, toSlider, toInput);
    const updateFromInput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
    const updateToInput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

    fromSlider.addEventListener("input", updateFromSlider);
    toSlider.addEventListener("input", updateToSlider);
    fromInput.addEventListener("input", updateFromInput);
    toInput.addEventListener("input", updateToInput);

    fillSlider(fromSlider, toSlider, "#C6C6C6", "#000", toSlider);
    setToggleAccessible(toSlider);

    fromInput.value = formatCurrency(fromSlider.value);
    toInput.value = formatCurrency(toSlider.value);

    return () => {
      fromSlider.removeEventListener("input", updateFromSlider);
      toSlider.removeEventListener("input", updateToSlider);
      fromInput.removeEventListener("input", updateFromInput);
      toInput.removeEventListener("input", updateToInput);
    };
  }, []);

  function formatCurrency(value) {
    return `${Number(value).toFixed(2)} EUR`;
  }

  function getParsed(currentFrom, currentTo) {
    const from = Number(currentFrom.value.replace(/[^0-9.]/g, ''));
    const to = Number(currentTo.value.replace(/[^0-9.]/g, ''));
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(toPosition / rangeDistance) * 100}%,
      ${sliderColor} ${(toPosition / rangeDistance) * 100}%,
      ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
    const toSlider = toSliderRef.current;
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#000', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = formatCurrency(to);
    } else {
      fromSlider.value = from;
      fromInput.value = formatCurrency(from);
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#000', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = formatCurrency(to);
    } else {
      toInput.value = formatCurrency(from);
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#000', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = formatCurrency(to);
    } else {
      fromInput.value = formatCurrency(from);
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#000', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = formatCurrency(to);
    } else {
      toInput.value = formatCurrency(from);
      toSlider.value = from;
    }
  }
 function phoneButtonClick() {
    const filtrationSection = document.querySelector('.filtration');
    const phoneButton = document.querySelector('.catalog-filtration__phone-button');
    if (filtrationSection.classList.contains('active')) {
      filtrationSection.classList.remove('active');
      phoneButton.classList.remove('active');
    } else {
      filtrationSection.classList.add('active');
      phoneButton.classList.add('active');
    }
 }
  return (
    <>
      <p className="catalog-way">Home / Womens Dress / Best Chose</p>
      <button className="catalog-filtration__phone-button" onClick={phoneButtonClick}>Filtration
        <img src={arrowDown} alt="" />
      </button>
      <section className="filtration">
        <div className="catalog-filtration__wrap">
          <h2 className="catalog-filtration__title">Filter</h2>
        </div>
        <div className="catalog-filtration__brand">
          <FiltrName className="brand" filtrName="Brand" />
          <form action="" className="catalog-filtration__brand-form">
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
              />
              <p className="catalog-filtration__brand-input-name">State</p>
            </div>
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
              />
              <p className="catalog-filtration__brand-input-name">Cooper</p>
            </div>
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
              />
              <p className="catalog-filtration__brand-input-name">bardot</p>
            </div>
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
              />
              <p className="catalog-filtration__brand-input-name">alfani</p>
            </div>
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
              />
              <p className="catalog-filtration__brand-input-name">cece</p>
            </div>
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
              />
              <p className="catalog-filtration__brand-input-name">
                donna ricco
              </p>
            </div>
          </form>
        </div>
        <div className="catalog-filtration__size">
          <FiltrName className="size" filtrName="Size (Inches)" />
          <form action="" className="catalog-filtration__size-form">
            <button className="catalog-filtration__size-button">osfa</button>
            <button className="catalog-filtration__size-button">w26</button>
            <button className="catalog-filtration__size-button">w27</button>
            <button className="catalog-filtration__size-button">w28</button>
            <button className="catalog-filtration__size-button">w29</button>
            <button className="catalog-filtration__size-button">w30</button>
            <button className="catalog-filtration__size-button">w31</button>
            <button className="catalog-filtration__size-button active">w32</button>
            <button className="catalog-filtration__size-button">w33</button>
            <button className="catalog-filtration__size-button">w34</button>
            <button className="catalog-filtration__size-button">w35</button>
            <button className="catalog-filtration__size-button">w36</button>
            <button className="catalog-filtration__size-button">w38</button>
            <button className="catalog-filtration__size-button">w40</button>
            <button className="catalog-filtration__size-button">w42</button>
            <button className="catalog-filtration__size-button">w44</button>
            <button className="catalog-filtration__size-button">w46</button>
            <button className="catalog-filtration__size-button">w48</button>
            <button className="catalog-filtration__size-button">w50</button>
            <button className="catalog-filtration__size-button">w52</button>
          </form>
        </div>
        <div className="catalog-filtration__dress-length">
          <FiltrName className="dress-length" filtrName="Dress length" />
          <form action="" className="catalog-filtration__dress-length-form">
            <div className="catalog-filtration__dress-length-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__dress-length-input"
              />
              <p className="catalog-filtration__dress-length-name">short</p>
            </div>
            <div className="catalog-filtration__dress-length-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__dress-length-input"
              />
              <p className="catalog-filtration__dress-length-name">
                knee length
              </p>
            </div>
            <div className="catalog-filtration__dress-length-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__dress-length-input"
              />
              <p className="catalog-filtration__dress-length-name">hight low</p>
            </div>
            <div className="catalog-filtration__dress-length-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__dress-length-input"
              />
              <p className="catalog-filtration__dress-length-name">long</p>
            </div>
            <div className="catalog-filtration__dress-length-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__dress-length-input"
              />
              <p className="catalog-filtration__dress-length-name">midi</p>
            </div>
          </form>
        </div>
        <div className="catalog-filtration__color">
          <FiltrName className="color" filtrName="Color" />
          <form action="" className="catalog-filtration__form-color">
            <button
              style={{ backgroundColor: "rgba(41, 42, 45, 1)" }}
              className="catalog-filtration__form-color-btn"
            ></button>
            <button
              style={{ backgroundColor: "rgba(243, 236, 226, 1)" }}
              className="catalog-filtration__form-color-btn"
            ></button>
            <button
              style={{ backgroundColor: "rgba(36, 66, 106, 1)" }}
              className="catalog-filtration__form-color-btn"
            ></button>
            <button
              style={{ backgroundColor: "rgba(41, 42, 45, 1)" }}
              className="catalog-filtration__form-color-btn active"
            ></button>
            <button
              style={{ backgroundColor: "rgba(102, 102, 137, 1)" }}
              className="catalog-filtration__form-color-btn"
            ></button>
            <button
              style={{ backgroundColor: "rgba(194, 190, 182, 1)" }}
              className="catalog-filtration__form-color-btn"
            ></button>
            <button
              style={{ backgroundColor: "rgba(170, 171, 167, 1)" }}
              className="catalog-filtration__form-color-btn"
            ></button>
            <button
              style={{ backgroundColor: "rgba(151, 30, 52, 1)" }}
              className="catalog-filtration__form-color-btn"
            ></button>
            <button
              style={{ backgroundColor: "rgba(203, 161, 62, 1)" }}
              className="catalog-filtration__form-color-btn"
            ></button>
            <button
              style={{ backgroundColor: "rgba(115, 81, 60, 1)" }}
              className="catalog-filtration__form-color-btn"
            ></button>
            <button
              style={{ backgroundColor: "rgba(218, 177, 177, 1)" }}
              className="catalog-filtration__form-color-btn"
            ></button>
            <button
              style={{ backgroundColor: "rgba(43, 159, 167, 1)" }}
              className="catalog-filtration__form-color-btn"
            ></button>
          </form>
        </div>
        <div className="catalog-filtration__price">
          <FiltrName className="price" filtrName="Price Range" />
          <div className="form_control">
            <div className="form_control_container">
              <input
                className="form_control_container__time__input control-left-input"
                type="text"
                id="fromInput"
                ref={fromInputRef}
                defaultValue="0"
                min="0"
                max="500"
                readOnly
              />
            </div>
            <div className="form_control_container">
              <input
                className="form_control_container__time__input"
                type="text"
                id="toInput"
                ref={toInputRef}
                defaultValue="500"
                min="0"
                max="500"
                readOnly
              />
            </div>
          </div>
          <div className="range_container">
            <div className="sliders_control">
              <input id="fromSlider" ref={fromSliderRef} type="range" defaultValue={0} min="0" max="500" />
              <input id="toSlider" ref={toSliderRef} type="range" defaultValue={500} min="0" max="500" />
            </div>
          </div>
          <button className="catalog-filtration__apply">Apply</button>
        </div>
        <div className="catalog-filtration__about-dresses">
          <h2 className="catalog-filtration__about-dresses-title">
            About Dresses
          </h2>
          <p className="catalog-filtration__about-dresses-text">
            Every day we’re gonna be dropping the latest trends to help you nail
            every Summer sitch. Whether it’s a graduation, your mate's wedding,
            or just a cute day at the races with the gals, our occasion dresses
            have got you covered. Not looking for something fancy? No stress.
            We’ve got day dresses for days (aka bodycon dresses, t-shirt
            dresses, oversized shirt dresses).
          </p>
        </div>
      </section>
    </>
  );
};
