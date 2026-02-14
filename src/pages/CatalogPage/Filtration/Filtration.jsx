import React, { useState, useRef, useEffect, useCallback } from "react";
import { FiltrName } from "./Filtration-Components/FiltrationName.jsx";
import "./Filtration.scss";
import arrowDown from "../../../images/arrow-down.svg";
import close from "../../../images/closeIcon-wishlist.svg";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters, clearFilters } from "../../../redux/filtration/actions.js";

export const Filtration = () => {
  const filtration = useSelector(state => state.filtration);
  const dispatch = useDispatch();
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(500);
  const [brands, setBrands] = useState([]);
  const [size, setSize] = useState('');
  const [dressLength, setDressLength] = useState([]);
  const [color, setColor] = useState('');
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const fromSliderRef = useRef(null);
  const toSliderRef = useRef(null);

  const phoneButtonClick = () => {
    const filtrationElement = document.querySelector(".filtration");
    const phoneButton = document.querySelector(".catalog-filtration__phone-button");
    if (filtrationElement) filtrationElement.classList.toggle("active");
    if (phoneButton) phoneButton.classList.toggle("active");
  };

  useEffect(() => {
    const fromSlider = fromSliderRef.current;
    const toSlider = toSliderRef.current;
    const fromInput = fromInputRef.current;
    const toInput = toInputRef.current;

    const updateFromSlider = () => controlFromSlider(fromSlider, toSlider, fromInput);
    const updateToSlider = () => controlToSlider(fromSlider, toSlider, toInput);
    const updateFromInput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
    const updateToInput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

    if (fromSlider) fromSlider.addEventListener("input", updateFromSlider);
    if (toSlider) toSlider.addEventListener("input", updateToSlider);
    if (fromInput) fromInput.addEventListener("input", updateFromInput);
    if (toInput) toInput.addEventListener("input", updateToInput);

    if (fromSlider && toSlider) {
      fillSlider(fromSlider, toSlider, "#C6C6C6", "#000", toSlider);
      setToggleAccessible(toSlider);
    }

    if (fromInput && fromSlider) fromInput.value = formatCurrency(fromSlider.value);
    if (toInput && toSlider) toInput.value = formatCurrency(toSlider.value);
    setBrands(filtration.brands || []);
    setSize(filtration.size || '');
    setDressLength(filtration.dressLength || []);
    setColor(filtration.color || '');
    setFromValue(filtration.price ? filtration.price.from : 0);
    setToValue(filtration.price ? filtration.price.to : 500);
    setIsFilterApplied(filtration && Object.keys(filtration).length > 0);




    return () => {
      if (fromSlider) fromSlider.removeEventListener("input", updateFromSlider);
      if (toSlider) toSlider.removeEventListener("input", updateToSlider);
      if (fromInput) fromInput.removeEventListener("input", updateFromInput);
      if (toInput) toInput.removeEventListener("input", updateToInput);
      
    }
  }, []);

  const formatCurrency = (value) => `${Number(value)},00 EUR`;

  const getParsed = (currentFrom, currentTo) => {
    const from = Number(currentFrom.value.replace(/[^0-9.]/g, ""));
    const to = Number(currentTo.value.replace(/[^0-9.]/g, ""));
    return [from, to];
  };

  const fillSlider = (from, to, sliderColor, rangeColor, controlSlider) => {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(to right, ${sliderColor} 0%, ${sliderColor} ${(fromPosition / rangeDistance) * 100}%, ${rangeColor} ${(fromPosition / rangeDistance) * 100}%, ${rangeColor} ${(toPosition / rangeDistance) * 100}%, ${sliderColor} ${(toPosition / rangeDistance) * 100}%, ${sliderColor} 100%)`;
  };

  const setToggleAccessible = (currentTarget) => {
    const toSlider = toSliderRef.current;
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  };

  const controlFromInput = (fromSlider, fromInput, toInput, controlSlider) => {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, "#C6C6C6", "#000", controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = formatCurrency(to);
    } else {
      fromSlider.value = from;
      fromInput.value = formatCurrency(from);
    }
  };

  const controlToInput = (toSlider, fromInput, toInput, controlSlider) => {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, "#C6C6C6", "#000", controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = formatCurrency(to);
    } else {
      toInput.value = formatCurrency(from);
    }
  };

  const controlFromSlider = (fromSlider, toSlider, fromInput) => {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, "#C6C6C6", "#000", toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = formatCurrency(to);
    } else {
      fromInput.value = formatCurrency(from);
    }
  };

  const controlToSlider = (fromSlider, toSlider, toInput) => {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, "#C6C6C6", "#000", toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = formatCurrency(to);
    } else {
      toInput.value = formatCurrency(from);
      toSlider.value = from;
    }
  };

  const changeBrand = (e) => {
    const brand = e.target.value;
    setBrands((prev) =>
      e.target.checked ? [...prev, brand] : prev.filter((b) => b !== brand)
    );
  };

  const changeSize = (e) => {
    e.preventDefault();
    const newSize = e.target.textContent;
    setSize(newSize);
    document.querySelectorAll(".catalog-filtration__size-button").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
  };

  const changeDressLength = (e) => {
    const length = e.target.value;
    setDressLength((prev) =>
      e.target.checked ? [...prev, length] : prev.filter((l) => l !== length)
    );
  };

  const changeColor = (e) => {
    e.preventDefault();
    const newColor = e.target.value;
    setColor(newColor);
    document.querySelectorAll(".catalog-filtration__form-color-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
  };

  const changeFromValue = (e) => setFromValue(Number(e.target.value));
  const changeToValue = (e) => setToValue(Number(e.target.value));

  const applyFilters = () => {
    const hasFilters =
      fromValue !== 0 ||
      toValue !== 500 ||
      brands.length > 0 ||
      size !== "" ||
      dressLength.length > 0 ||
      color !== "";
    setIsFilterApplied(hasFilters);
    const filters = {
      price: { from: fromValue, to: toValue },
      brands,
      size,
      dressLength,
      color,
    }
    console.log(filters);
    dispatch(applyFilters(filters));
  };

  const deleteBrand = (brandToDelete) => {
    const updated = brands.filter((b) => b !== brandToDelete);
    setBrands(updated);
    if (updated.length === 0 && !size && !dressLength.length && !color && fromValue === 0 && toValue === 500) setIsFilterApplied(false);
    document.querySelectorAll(".catalog-filtration__brand-input").forEach(input => {
      if (input.value === brandToDelete) input.checked = false;
    });
    dispatch(applyFilters({ brands: updated }));
  };

  const deleteSize = () => {
    setSize('');
    if (!brands.length && !dressLength.length && !color && fromValue === 0 && toValue === 500) setIsFilterApplied(false);
    document.querySelectorAll(".catalog-filtration__size-button").forEach(btn => btn.classList.remove("active"));
    dispatch(applyFilters({ size: '' }));
  };

  const deleteDressSize =  useCallback( (dressSizeToDelete) => {
    const updated = dressLength.filter((len) => len !== dressSizeToDelete);
    setDressLength(updated);
    if (!brands.length && !size && updated.length === 0 && !color && fromValue === 0 && toValue === 500) setIsFilterApplied(false);
    document.querySelectorAll(".catalog-filtration__dress-length-input").forEach(input => {
      if (input.value === dressSizeToDelete) input.checked = false;
    });
    dispatch(applyFilters({ dressLength: updated }));
  }, [dressLength]);

  const deleteColor = useCallback( () => {
    setColor('');
    if (!brands.length && !size && !dressLength.length && fromValue === 0 && toValue === 500) setIsFilterApplied(false);
    document.querySelectorAll(".catalog-filtration__form-color-btn").forEach(btn => btn.classList.remove("active"));
    dispatch(applyFilters({ color: '' }));
  }, [color]);
  const deletePrice = useCallback( () => {
    setFromValue(0);
    setToValue(500);
    if (!brands.length && !size && !dressLength.length && !color) setIsFilterApplied(false);
    document.getElementById("fromSlider").value = 0;
    document.getElementById("toSlider").value = 500;
    document.getElementById("fromInput").value = "0";
    document.getElementById("toInput").value = "500";
    const fromSlider = fromSliderRef.current;
    const toSlider = toSliderRef.current;
    const toInput = toInputRef.current;
    dispatch(applyFilters({ price: { from: 0, to: 500 } }));
  }, [fromValue, toValue]);

  const resetAll = () => {
    setFromValue(0);
    setToValue(500);
    setBrands([]);
    setSize('');
    setDressLength([]);
    setColor('');
    setIsFilterApplied(false);
    document.getElementById("fromSlider").value = 0;
    document.getElementById("toSlider").value = 500;
    document.getElementById("fromInput").value = "0";
    document.getElementById("toInput").value = "500";
    document.querySelectorAll(".catalog-filtration__brand-input").forEach(input => input.checked = false);
    document.querySelectorAll(".catalog-filtration__size-button").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".catalog-filtration__dress-length-input").forEach(input => input.checked = false);
    document.querySelectorAll(".catalog-filtration__form-color-btn").forEach(btn => btn.classList.remove("active"));
    dispatch(clearFilters());
  };
  return (
    <>
      <button className="catalog-filtration__phone-button" onClick={phoneButtonClick}>Filtration
        <img src={arrowDown} alt="" />
      </button>
      <section className="filtration">
        <div className={`catalog-filtration__wrap ${isFilterApplied ? '' : 'is-hidden'}`}>
          <div className="filtration-text__wrap">
            <h2 className="catalog-filtration__title">Filter</h2>
            <p className="filtration-text__reset" onClick={resetAll}><img src={close} alt="" className="filtration-close" /> RESET ALL</p>
          </div>
          <ul>
            <li className={brands.length === 0 ? "is-hidden" : ""}>
              <h3 className="filtration-list__title">Brand:</h3>
              <ul className="filtration-list__brand">
                {brands.map((brand) => (
                  <li key={brand} className="filtration-wrap">
                    <img src={close} alt="" className="filtration-close" onClick={() => deleteBrand(brand)} />
                    <p className="selected-filters">{brand}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li className={size === "" ? "is-hidden" : ""}>
              <h3 className="filtration-list__title">Size(inches):</h3>
              <div className="filtration-list__size">
                <img src={close} alt="" className="filtration-close" onClick={deleteSize} />
                <p key={size} className="selected-filters">{size}</p>
              </div>
            </li>
            <li className={dressLength.length === 0 ? "is-hidden" : ""}>
              <h3 className="filtration-list__title">Dress Length:</h3>
              <ul className="filtration-list__dressLength">
                {dressLength.map((dressLen) => (
                  <li key={dressLen} className="filtration-wrap">
                    <img src={close} alt="" className="filtration-close" onClick={() => deleteDressSize(dressLen)} />
                    <p className="selected-filters">{dressLen}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li className={color === "" ? "is-hidden" : ""}>
              <h3 className="filtration-list__title">Color:</h3>
              <div className="filtration-list__size">
                <img src={close} alt="" className="filtration-close" onClick={deleteColor} />
                <div className={`catalog-filtration__form-color-btn active ${color}`}></div>
              </div>
            </li>
            <li className={fromValue === 0 && toValue === 500 ? "is-hidden" : ""}>
              <h3 className="filtration-list__title">Price:</h3>
              <div className="filtration-list__size">
                <img src={close} alt="" className="filtration-close" onClick={deletePrice} />
                <p className="selected-filters">
                  {fromValue === toValue ? `${fromValue},00 EUR` :
                    `${fromValue},00 EUR - ${toValue},00 EUR`}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="catalog-filtration__brand">
          <FiltrName className="brand" filtrName="Brand" closeClass=".catalog-filtration__brand-form" />
          <form action="" className="catalog-filtration__brand-form">
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
                value="State"
                onChange={changeBrand}
              />
              <p className="catalog-filtration__brand-input-name">State</p>
            </div>
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
                value="Cooper"
                onChange={changeBrand}
              />
              <p className="catalog-filtration__brand-input-name">Cooper</p>
            </div>
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
                value="Bardot"
                onChange={changeBrand}
              />
              <p className="catalog-filtration__brand-input-name">bardot</p>
            </div>
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
                value="Alfani"
                onChange={changeBrand}
              />
              <p className="catalog-filtration__brand-input-name">alfani</p>
            </div>
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
                value="Cece"
                onChange={changeBrand}
              />
              <p className="catalog-filtration__brand-input-name">cece</p>
            </div>
            <div className="catalog-filtration__brand-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__brand-input"
                value="Donna Ricco"
                onChange={changeBrand}
              />
              <p className="catalog-filtration__brand-input-name">
                donna ricco
              </p>
            </div>
          </form>
        </div>
        <div className="catalog-filtration__size">
          <FiltrName className="size" filtrName="Size (Inches)" closeClass=".catalog-filtration__size-form" />
          <form action="" className="catalog-filtration__size-form">
            <button className="catalog-filtration__size-button" onClick={changeSize}>osfa</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w26</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w27</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w28</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w29</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w30</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w31</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w32</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w33</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w34</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w35</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w36</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w38</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w40</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w42</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w44</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w46</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w48</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w50</button>
            <button className="catalog-filtration__size-button" onClick={changeSize}>w52</button>
          </form>
        </div>
        <div className="catalog-filtration__dress-length">
          <FiltrName className="dress-length" filtrName="Dress length" closeClass=".catalog-filtration__dress-length-form" />
          <form action="" className="catalog-filtration__dress-length-form">
            <div className="catalog-filtration__dress-length-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__dress-length-input"
                onChange={changeDressLength}
                value="short"
              />
              <p className="catalog-filtration__dress-length-name">short</p>
            </div>
            <div className="catalog-filtration__dress-length-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__dress-length-input"
                onChange={changeDressLength}
                value="knee length"
              />
              <p className="catalog-filtration__dress-length-name">
                knee length
              </p>
            </div>
            <div className="catalog-filtration__dress-length-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__dress-length-input"
                onChange={changeDressLength}
                value="hight low"
              />
              <p className="catalog-filtration__dress-length-name">hight low</p>
            </div>
            <div className="catalog-filtration__dress-length-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__dress-length-input"
                onChange={changeDressLength}
                value="long"
              />
              <p className="catalog-filtration__dress-length-name">long</p>
            </div>
            <div className="catalog-filtration__dress-length-input-wrap">
              <input
                type="checkbox"
                className="catalog-filtration__dress-length-input"
                onChange={changeDressLength}
                value="midi"
              />
              <p className="catalog-filtration__dress-length-name">midi</p>
            </div>
          </form>
        </div>
        <div className="catalog-filtration__color">
          <FiltrName className="color" filtrName="Color" closeClass=".catalog-filtration__form-color" />
          <form action="" className="catalog-filtration__form-color">
            <button
              style={{ backgroundColor: "#292a2d" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#292a2d'}
            ></button>
            <button
              style={{ backgroundColor: "#f3ece2" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#f3ece2'}
            ></button>
            <button
              style={{ backgroundColor: "#24426a" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#24426a'}
            ></button>
            <button
              style={{ backgroundColor: "#292a2d" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#292a2d'}
            ></button>
            <button
              style={{ backgroundColor: "#666689" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#666689'}
            ></button>
            <button
              style={{ backgroundColor: "#c2beb6" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#c2beb6'}
            ></button>
            <button
              style={{ backgroundColor: "#aaaba7" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#aaaba7'}
            ></button>
            <button
              style={{ backgroundColor: "#971e34" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#971e34'}
            ></button>
            <button
              style={{ backgroundColor: "#cba13e" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#cba13e'}
            ></button>
            <button
              style={{ backgroundColor: "#73513c" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#73513c'}
            ></button>
            <button
              style={{ backgroundColor: "#dab1b1" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#dab1b1'}
            ></button>
            <button
              style={{ backgroundColor: "#2b9fa7" }}
              className="catalog-filtration__form-color-btn"
              onClick={changeColor}
              value={'#2b9fa7'}
            ></button>
          </form>
        </div>
        <div className="catalog-filtration__price">
          <FiltrName className="price" filtrName="Price Range" closeClass=".form_control" />
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
              <input id="fromSlider" ref={fromSliderRef} type="range" min="0" max="500" defaultValue={0} onChange={changeFromValue} />
              <input id="toSlider" ref={toSliderRef} type="range" min="0" max="500" defaultValue={500} onInput={changeToValue} />
            </div>
          </div>
          <button className="catalog-filtration__apply" onClick={applyFilters}>Apply</button>
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
}
