import React, { Component, createRef } from "react";
import { FiltrName } from "./Filtration-Components/FiltrationName.jsx";
import "./Filtration.scss";
import arrowDown from "../../../images/arrow-down.svg";
import close from "../../../images/closeIcon-wishlist.svg";

export class Filtration extends Component {
  constructor(props) {
    super(props);
    this.fromInputRef = createRef();
    this.toInputRef = createRef();
    this.fromSliderRef = createRef();
    this.toSliderRef = createRef();
  }
  state = {
    fromValue: 0,
    toValue: 500,
    brands: [],
    size: '',
    dressLength: [],
    color: '',
    filtration: {
      brands: [],
      size: '',
      dressLength: [],
      color: '',
      price: { fromValue: 0, toValue: 500 },
    },
  };
  componentDidMount() {
    const fromSlider = this.fromSliderRef.current;
    const toSlider = this.toSliderRef.current;
    const fromInput = this.fromInputRef.current;
    const toInput = this.toInputRef.current;

    const updateFromSlider = () =>
      this.controlFromSlider(fromSlider, toSlider, fromInput);
    const updateToSlider = () =>
      this.controlToSlider(fromSlider, toSlider, toInput);
    const updateFromInput = () =>
      this.controlFromInput(fromSlider, fromInput, toInput, toSlider);
    const updateToInput = () =>
      this.controlToInput(toSlider, fromInput, toInput, toSlider);

    fromSlider.addEventListener("input", updateFromSlider);
    toSlider.addEventListener("input", updateToSlider);
    fromInput.addEventListener("input", updateFromInput);
    toInput.addEventListener("input", updateToInput);

    this.fillSlider(fromSlider, toSlider, "#C6C6C6", "#000", toSlider);
    this.setToggleAccessible(toSlider);

    fromInput.value = this.formatCurrency(fromSlider.value);
    toInput.value = this.formatCurrency(toSlider.value);
  }

  componentWillUnmount() {
    const fromSlider = this.fromSliderRef.current;
    const toSlider = this.toSliderRef.current;
    const fromInput = this.fromInputRef.current;
    const toInput = this.toInputRef.current;

    fromSlider.removeEventListener("input", this.updateFromSlider);
    toSlider.removeEventListener("input", this.updateToSlider);
    fromInput.removeEventListener("input", this.updateFromInput);
    toInput.removeEventListener("input", this.updateToInput);
  }
  phoneButtonClick = () => {
    const filtration = document.querySelector(".filtration");
    const phoneButton = document.querySelector(".catalog-filtration__phone-button");
    if (filtration) filtration.classList.toggle("active");
    if (phoneButton) phoneButton.classList.toggle("active");
  };

  formatCurrency(value) {
    return `${Number(value)},00 EUR`;
  }

  getParsed(currentFrom, currentTo) {
    const from = Number(currentFrom.value.replace(/[^0-9.]/g, ""));
    const to = Number(currentTo.value.replace(/[^0-9.]/g, ""));
    return [from, to];
  }

  fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
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

  setToggleAccessible(currentTarget) {
    const toSlider = this.toSliderRef.current;
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = this.getParsed(fromInput, toInput);
    this.fillSlider(fromInput, toInput, "#C6C6C6", "#000", controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = this.formatCurrency(to);
    } else {
      fromSlider.value = from;
      fromInput.value = this.formatCurrency(from);
    }
  }

  controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = this.getParsed(fromInput, toInput);
    this.fillSlider(fromInput, toInput, "#C6C6C6", "#000", controlSlider);
    this.setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = this.formatCurrency(to);
    } else {
      toInput.value = this.formatCurrency(from);
    }
  }

  controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = this.getParsed(fromSlider, toSlider);
    this.fillSlider(fromSlider, toSlider, "#C6C6C6", "#000", toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = this.formatCurrency(to);
    } else {
      fromInput.value = this.formatCurrency(from);
    }
  }

  controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = this.getParsed(fromSlider, toSlider);
    this.fillSlider(fromSlider, toSlider, "#C6C6C6", "#000", toSlider);
    this.setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = this.formatCurrency(to);
    } else {
      toInput.value = this.formatCurrency(from);
      toSlider.value = from;
    }
  }
  changeBrand = (e) => {
    const { brands } = this.state;
    const brand = e.target.value;
    if (e.target.checked) {
      this.setState({ brands: [...brands, brand] });
      console.log(this.state.brands);
    } else {
      this.setState({ brands: brands.filter((b) => b !== brand) });
      console.log(this.state.brands);
    }
  }

  changeSize = (e) => {
    e.preventDefault();
    this.setState({ size: e.target.textContent });
    console.log(this.state.size);
    document.querySelectorAll(".catalog-filtration__size-button").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
  }
  changeDressLength = (e) => {
    const { dressLength } = this.state;
    const length = e.target.value;
    if (e.target.checked) {
      this.setState({ dressLength: [...dressLength, length] });
    } else {
      this.setState({ dressLength: dressLength.filter((l) => l !== length) });
    }
    console.log(this.state.dressLength);
  }
  changeColor = (e) => {
    e.preventDefault();
    this.setState({ color: e.target.value });
    console.log(this.state.color);
    document.querySelectorAll(".catalog-filtration__form-color-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
  }

 changeFromValue = (e) => {
  e.preventDefault();
  const fromValue = Number(e.target.value);
  this.setState({ fromValue: fromValue }, () => {
    console.log("fromValue:", this.state.fromValue);
  });
}


  changeToValue = (e) => {
  e.preventDefault();
  const toValue = Number(e.target.value);
  this.setState({ toValue: toValue }, () => {
    console.log("toValue:", this.state.toValue);
  });
}


  applyFilters = () => {
    const { brands, size, dressLength, color, fromValue, toValue } = this.state;
    this.setState({ filtration: { 'price': { fromValue, toValue }, 'brands': brands, 'size': size, 'dressLength': dressLength, 'color': color, } });
    console.log(this.state.filtration);
    if (fromValue !== 0 && toValue !== 500 || brands != [] || size != '' || dressLength != [] || color != '') {

      document.querySelector(".catalog-filtration__wrap").classList.remove("is-hidden");
    }

  }
  

  render() {
    return (
      <>
        <p className="catalog-way">Home / Womens Dress / Best Chose</p>
        <button className="catalog-filtration__phone-button" onClick={this.phoneButtonClick}>Filtration
          <img src={arrowDown} alt="" />
        </button>
        <section className="filtration">
          <div className="catalog-filtration__wrap is-hidden">
         <div className="filtration-text__wrap">  <h2 className="catalog-filtration__title">Filter</h2> 
         <p className="filtration-text__reset"><img src={close} alt="" className="filtration-close"/> RESET ALL</p>
         </div> 
            <ul>
              <li className={this.state.filtration.brands.length == 0 ? "is-hidden" : ""}>
                <h3 className="filtration-list__title">Brand:</h3>
                <ul className="filtration-list__brand">{this.state.filtration.brands.map((brand) => {
                  return (
                    <> <li className="filtration-wrap"><img src={close} alt="" className="filtration-close" />
                      <p key={brand} className="selected-filters">{brand}</p></li>
                    </>)
                })}</ul>
              </li>
              <li className={this.state.filtration.size === "" ? "is-hidden" : ""}>
                <h3 className="filtration-list__title">Size(inches):</h3>
                <li className="filtration-list__size">
                  <img src={close} alt="" className="filtration-close" />
                  <p key={this.state.filtration.size} className="selected-filters">{this.state.filtration.size}</p>
                </li>
              </li>
              <li className={this.state.filtration.dressLength.length == 0 ? "is-hidden" : ""}>
                <h3 className="filtration-list__title">Dress Length:</h3>
                <ul className="filtration-list__dressLength">{this.state.filtration.dressLength.map((dressLen) => {
                  return (
                    <> <li className="filtration-wrap"><img src={close} alt="" className="filtration-close" />
                      <p key={dressLen} className="selected-filters">{dressLen}</p></li>
                    </>)
                })}</ul>
              </li>
              <li className={this.state.filtration.color === "" ? "is-hidden" : ""}>
                <h3 className="filtration-list__title">Color:</h3>
                <li className="filtration-list__size">
                  <img src={close} alt="" className="filtration-close" />
                  <div className={`catalog-filtration__form-color-btn active ${this.state.filtration.color}`}></div>
                </li>
              </li>
              <li className={this.state.filtration.price.fromValue === 0 && this.state.filtration.price.toValue === 500 ? "is-hidden" : ""}>
                <h3 className="filtration-list__title">Price:</h3>
                <li className="filtration-list__size">
                  <img src={close} alt="" className="filtration-close" />
                  <p className="selected-filters">
                    {this.state.filtration.price.fromValue === this.state.filtration.price.toValue ? `${this.state.filtration.price.fromValue},00 EUR`:
                    `${this.state.filtration.price.fromValue},00 EUR - ${this.state.filtration.price.toValue},00 EUR`}
                  </p>


                </li>
              </li>
            </ul>
          </div>
          <div className="catalog-filtration__brand">
            <FiltrName className="brand" filtrName="Brand" />
            <form action="" className="catalog-filtration__brand-form">
              <div className="catalog-filtration__brand-input-wrap">
                <input
                  type="checkbox"
                  className="catalog-filtration__brand-input"
                  value="State"
                  onChange={this.changeBrand}
                />
                <p className="catalog-filtration__brand-input-name">State</p>
              </div>
              <div className="catalog-filtration__brand-input-wrap">
                <input
                  type="checkbox"
                  className="catalog-filtration__brand-input"
                  value="Cooper"
                  onChange={this.changeBrand}
                />
                <p className="catalog-filtration__brand-input-name">Cooper</p>
              </div>
              <div className="catalog-filtration__brand-input-wrap">
                <input
                  type="checkbox"
                  className="catalog-filtration__brand-input"
                  value="Bardot"
                  onChange={this.changeBrand}
                />
                <p className="catalog-filtration__brand-input-name">bardot</p>
              </div>
              <div className="catalog-filtration__brand-input-wrap">
                <input
                  type="checkbox"
                  className="catalog-filtration__brand-input"
                  value="Alfani"
                  onChange={this.changeBrand}
                />
                <p className="catalog-filtration__brand-input-name">alfani</p>
              </div>
              <div className="catalog-filtration__brand-input-wrap">
                <input
                  type="checkbox"
                  className="catalog-filtration__brand-input"
                  value="Cece"
                  onChange={this.changeBrand}
                />
                <p className="catalog-filtration__brand-input-name">cece</p>
              </div>
              <div className="catalog-filtration__brand-input-wrap">
                <input
                  type="checkbox"
                  className="catalog-filtration__brand-input"
                  value="Donna Ricco"
                  onChange={this.changeBrand}
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
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>osfa</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w26</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w27</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w28</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w29</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w30</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w31</button>
              <button className="catalog-filtration__size-button active" onClick={this.changeSize}>w32</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w33</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w34</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w35</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w36</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w38</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w40</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w42</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w44</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w46</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w48</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w50</button>
              <button className="catalog-filtration__size-button" onClick={this.changeSize}>w52</button>
            </form>
          </div>
          <div className="catalog-filtration__dress-length">
            <FiltrName className="dress-length" filtrName="Dress length" />
            <form action="" className="catalog-filtration__dress-length-form">
              <div className="catalog-filtration__dress-length-input-wrap">
                <input
                  type="checkbox"
                  className="catalog-filtration__dress-length-input"
                  onChange={this.changeDressLength}
                  value="short"
                />
                <p className="catalog-filtration__dress-length-name">short</p>
              </div>
              <div className="catalog-filtration__dress-length-input-wrap">
                <input
                  type="checkbox"
                  className="catalog-filtration__dress-length-input"
                  onChange={this.changeDressLength}
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
                  onChange={this.changeDressLength}
                  value="hight low"
                />
                <p className="catalog-filtration__dress-length-name">hight low</p>
              </div>
              <div className="catalog-filtration__dress-length-input-wrap">
                <input
                  type="checkbox"
                  className="catalog-filtration__dress-length-input"
                  onChange={this.changeDressLength}
                  value="long"
                />
                <p className="catalog-filtration__dress-length-name">long</p>
              </div>
              <div className="catalog-filtration__dress-length-input-wrap">
                <input
                  type="checkbox"
                  className="catalog-filtration__dress-length-input"
                  onChange={this.changeDressLength}
                  value="midi"
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
                onClick={this.changeColor}
                value={'dark'}
              ></button>
              <button
                style={{ backgroundColor: "rgba(243, 236, 226, 1)" }}
                className="catalog-filtration__form-color-btn"
                onClick={this.changeColor}
                value={'light'}
              ></button>
              <button
                style={{ backgroundColor: "rgba(36, 66, 106, 1)" }}
                className="catalog-filtration__form-color-btn"
                onClick={this.changeColor}
                value={'blue'}
              ></button>
              <button
                style={{ backgroundColor: "rgba(41, 42, 45, 1)" }}
                className="catalog-filtration__form-color-btn active"
                onClick={this.changeColor}
                value={'black'}
              ></button>
              <button
                style={{ backgroundColor: "rgba(102, 102, 137, 1)" }}
                className="catalog-filtration__form-color-btn"
                onClick={this.changeColor}
                value={'gray'}
              ></button>
              <button
                style={{ backgroundColor: "rgba(194, 190, 182, 1)" }}
                className="catalog-filtration__form-color-btn"
                onClick={this.changeColor}
                value={'light-gray'}
              ></button>
              <button
                style={{ backgroundColor: "rgba(170, 171, 167, 1)" }}
                className="catalog-filtration__form-color-btn"
                onClick={this.changeColor}
                value={'silver'}
              ></button>
              <button
                style={{ backgroundColor: "rgba(151, 30, 52, 1)" }}
                className="catalog-filtration__form-color-btn"
                onClick={this.changeColor}
                value={'red'}
              ></button>
              <button
                style={{ backgroundColor: "rgba(203, 161, 62, 1)" }}
                className="catalog-filtration__form-color-btn"
                onClick={this.changeColor}
                value={'gold'}
              ></button>
              <button
                style={{ backgroundColor: "rgba(115, 81, 60, 1)" }}
                className="catalog-filtration__form-color-btn"
                onClick={this.changeColor}
                value={'brown'}
              ></button>
              <button
                style={{ backgroundColor: "rgba(218, 177, 177, 1)" }}
                className="catalog-filtration__form-color-btn"
                onClick={this.changeColor}
                value={'dark-pink'}
              ></button>
              <button
                style={{ backgroundColor: "rgba(43, 159, 167, 1)" }}
                className="catalog-filtration__form-color-btn"
                onClick={this.changeColor}
                value={'green'}
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
                  ref={this.fromInputRef}
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
                  ref={this.toInputRef}
                  defaultValue="500"
                  min="0"
                  max="500"
                  readOnly
                />
              </div>
            </div>
            <div className="range_container">
              <div className="sliders_control">
                <input id="fromSlider" ref={this.fromSliderRef} type="range" min="0" max="500" defaultValue={0}  onChange={this.changeFromValue}/>
                <input id="toSlider" ref={this.toSliderRef} type="range" min="0" max="500" defaultValue={500}  onInput={this.changeToValue}/>
              </div>
            </div>
            <button className="catalog-filtration__apply" onClick={this.applyFilters}>Apply</button>
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
}