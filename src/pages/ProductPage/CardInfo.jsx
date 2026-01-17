// import { Header } from "../../../src/components/Header/Header.jsx";
// import { Footer } from "../../../src/components/Footer/Footer.jsx";
import { Container } from "../../components/Container/Container";
import { useState} from "react";

import s from "./CardInfo.module.scss";

export function CardInfo () {
  const colors = [" #24426A", " wheat", "#666689"];
  const sizes = [
  "osfa", "w26", "w27", "w28", "w29", "w30", "w31", "w32", "w33",
  "w34", "w35", "w36", "w38", "w40", "w42", "w44", "w46", "w48", "w50", "w52"
];

  const [selectColor, setSelectColor] = useState(null)
  const [selectSize, setSelectSize] = useState(null)
  const [quantity, setQuantity] = useState(1)
  // const [price, setPrice] = useState(90);

//   const [isMobile, setIsMobile] = useState(
//     typeof window !== "undefined" ? window.innerWidth <= 768 : false);

//   useEffect(() => {
//   const handleResize = () => setIsMobile(window.innerWidth <= 768);
//   handleResize(); 
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);

const handleSelectColor = (color) => {
  setSelectColor(color);
};

const handleSelectSize = (size) => {
    setSelectSize(size);
  };

//   const handleChange = (e) => {
//   setSelectSize(e.target.value);
// };

const handleMinus = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

const handlePlus =()=>{
  setQuantity(quantity + 1)
}

  return (
    <>
      <main>
        <Container>
          <h2 className={s.mainTitle}>Home / Womens Dress / Best Chose</h2>
          <div className={s.mainWrapper}>
            <div className={s.cardImgBox}>
              <ul className={s.cardImgList}>
                <li className={s.cardImgItem}>
                  <img
                    className={s.cardImg}
                    src="https://img.gepur.com/products/45000/44507/webp/origins/44507_1_1.webp?1684224571https://img.gepur.com/products/45000/44507/webp/origins/44507_1_1.webp?1684224571"
                    alt=""
                  />
                </li>
                <li className={s.cardImgItem}>
                  <img
                    className={s.cardImg}
                    src="https://img.gepur.com/products/45000/44507/webp/origins/44507_1_1.webp?1684224571https://img.gepur.com/products/45000/44507/webp/origins/44507_1_1.webp?1684224571"
                    alt=""
                  />
                </li>
                <li className={s.cardImgItem}>
                  <img
                    className={s.cardImg}
                    src="https://img.gepur.com/products/45000/44507/webp/origins/44507_1_1.webp?1684224571https://img.gepur.com/products/45000/44507/webp/origins/44507_1_1.webp?1684224571"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className={s.mainImgBox}>
              <img
                className={s.mainImg}
                src="https://img.gepur.com/products/45000/44507/webp/origins/44507_1_1.webp?1684224571https://img.gepur.com/products/45000/44507/webp/origins/44507_1_1.webp?1684224571"
                alt=""
              />
              <div className={s.mainIconListBox}>
                <p className={s.mainImgText}>Share:</p>
                <ul className={s.mainIconList}>
                  <li className={s.mainIconItem}>
                    {/* <svg width="24" height="24" className={s.mainIconMedia}>
                    <use  href="#search"></use>
                </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="13"
                      viewBox="0 0 6 13"
                      fill="none"
                    >
                      <path
                        d="M4 4.22501V3.08754C4 2.51879 4.07692 2.19376 4.92308 2.19376H6V0H4.23077C2.07692 0 1.38462 1.05628 1.38462 2.92503V4.30629H0V6.5H1.30769V13H4V6.5H5.76923L6 4.22501H4Z"
                        fill="black"
                      />
                    </svg>
                  </li>
                  <li className={s.mainIconItem}>
                    {/* <svg width="24" height="24" className={s.mainIconMedia}>
                    <use  href="#search"></use>
                </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="10"
                      viewBox="0 0 13 10"
                      fill="none"
                    >
                      <path
                        d="M13 1.15326C12.5135 1.36079 12.0041 1.49145 11.4795 1.53757C12.0117 1.23012 12.4222 0.738223 12.6199 0.15408C12.0953 0.438465 11.5328 0.64598 10.9474 0.768958C10.4076 0.269362 9.70058 -0.00733705 8.97076 0.000349035C7.54912 -0.0227092 6.37076 1.0995 6.30994 2.5368C6.29473 2.72126 6.31755 2.90569 6.38597 3.07478C4.28012 3.02098 2.2959 2.06793 0.912278 0.461542C0.661401 0.853533 0.532161 1.30702 0.532161 1.76819C0.547366 2.62903 1.00351 3.42066 1.74853 3.84339C1.33041 3.82033 0.912278 3.72044 0.532161 3.53598C0.554968 4.76575 1.45205 5.80338 2.66082 5.99553C2.44035 6.05702 2.20468 6.08775 1.97661 6.07238C1.79415 6.08006 1.6193 6.05702 1.44445 5.99553C1.80936 7.07159 2.82807 7.79407 3.95321 7.76332C2.98772 8.48582 1.80935 8.86241 0.608184 8.83935H0C1.24678 9.57721 2.66082 9.97689 4.10526 9.99226C8.1193 10.1767 11.5175 7.04081 11.7 2.98255C11.7 2.93644 11.7 2.89033 11.7076 2.84421V2.5368C12.1942 2.12943 12.6351 1.66823 13 1.15326Z"
                        fill="black"
                      />
                    </svg>
                  </li>
                  <li className={s.mainIconItem}>
                    {/* <svg width="24" height="24" className={s.mainIconMedia}>
                    <use  href="#search"></use>
                </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="13"
                      viewBox="0 0 11 13"
                      fill="none"
                    >
                      <path
                        d="M5.91874 9.43848C5.29547 9.31706 4.7046 9.04185 4.21893 8.62903C3.89515 10.4098 3.49043 12.1096 2.19532 13C1.7906 10.3288 2.76192 8.30522 3.16664 6.11973C2.43814 4.90556 3.24758 2.39631 4.78553 2.96292C6.72819 3.69142 3.08569 7.57674 5.51402 8.06241C8.0233 8.54808 9.07557 3.69139 7.53763 2.0725C5.27119 -0.193938 0.981135 1.99156 1.4668 5.31028C1.62869 6.11973 2.43815 6.36257 1.7906 7.49579C0.333599 7.17201 -0.0711326 6.03878 0.00981179 4.50084C0.187889 2.15345 2.03342 0.275539 4.38081 0.0488948C7.13291 -0.274883 9.64219 1.02025 10.0469 3.61047C10.4516 6.52447 8.83274 9.68131 5.91874 9.43848Z"
                        fill="black"
                      />
                    </svg>
                  </li>
                  <li className={s.mainIconItem}>
                    {/* <svg width="24" height="24" className={s.mainIconMedia}>
                    <use  href="./images/search.svg"></use>
                </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M5.99999 3.56201C4.65569 3.56201 3.56201 4.65565 3.56201 5.99996C3.56201 7.34426 4.65569 8.43795 5.99999 8.43795C7.3443 8.43795 8.43796 7.34426 8.43796 5.99996C8.43796 4.65565 7.35189 3.56201 5.99999 3.56201Z"
                        fill="black"
                      />
                      <path
                        d="M11.9544 3.04558C11.9241 2.33165 11.8025 1.94428 11.7038 1.68605C11.5747 1.34428 11.4152 1.10126 11.157 0.843027C10.8987 0.584799 10.6557 0.425328 10.3139 0.296214C10.0557 0.19748 9.66837 0.0759476 8.95444 0.0455678C8.17976 0.00759309 7.95191 0 6.00001 0C4.04811 0 3.82026 0.00759309 3.04558 0.0455678C2.33165 0.0759476 1.94431 0.19748 1.68608 0.296214C1.34431 0.425328 1.10127 0.584799 0.843039 0.843027C0.584811 1.10126 0.425316 1.34428 0.296202 1.68605C0.197468 1.94428 0.0759592 2.33165 0.0455794 3.04558C0.00760468 3.82026 0 4.04808 0 5.99998C0 7.95188 0.00760468 8.17974 0.0455794 8.95442C0.0759592 9.66835 0.197468 10.0557 0.296202 10.3139C0.425316 10.6557 0.584811 10.8987 0.843039 11.157C1.10127 11.4152 1.34431 11.5747 1.68608 11.7038C1.94431 11.8025 2.33165 11.9241 3.04558 11.9544C3.81267 11.9924 4.04811 12 6.00001 12C7.95191 12 8.18735 11.9924 8.95444 11.9544C9.66837 11.9241 10.0557 11.8025 10.3139 11.7038C10.6557 11.5747 10.8987 11.4152 11.157 11.157C11.4152 10.8987 11.5747 10.6557 11.7038 10.3139C11.8025 10.0557 11.9241 9.66835 11.9544 8.95442C11.9924 8.17974 12 7.95188 12 5.99998C12 4.04808 11.9924 3.82026 11.9544 3.04558ZM6.00001 9.75188C3.92659 9.75188 2.24811 8.0734 2.24811 5.99998C2.24811 3.92656 3.92659 2.24807 6.00001 2.24807C8.07343 2.24807 9.75191 3.92656 9.75191 5.99998C9.75951 8.0734 8.07343 9.75188 6.00001 9.75188ZM9.90381 2.9772C9.41774 2.9772 9.0228 2.58229 9.0228 2.09621C9.0228 1.61014 9.41774 1.21517 9.90381 1.21517C10.3899 1.21517 10.7848 1.61014 10.7848 2.09621C10.7848 2.58229 10.3899 2.9772 9.90381 2.9772Z"
                        fill="black"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>

            <div className={s.catalogeMainBox}>
              <h2 className={s.catalogeTitle}>
                Home / Womens Dress / Angels malu
              </h2>

              <div className={s.fendiWrapper}>
                <div className={s.fendiBox}>
                  <svg
                    className={s.fendiIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 51 15"
                    fill="none"
                  >
                    <path
                      d="M0.000944025 0.00596801C3.04251 0.00596801 6.08343 0.00862889 9.125 0.00463867C9.12827 0.835934 9.13154 1.66723 9.12369 2.49919C6.97582 2.49852 4.82729 2.49719 2.67876 2.49985C2.68006 3.5433 2.67745 4.5874 2.68006 5.63085C4.56101 5.62686 6.44196 5.63018 8.32225 5.62952C8.33271 6.45815 8.32028 7.28679 8.32879 8.11542C6.44588 8.11343 4.56363 8.11742 2.68137 8.11343C2.67679 10.0793 2.67876 12.0451 2.68006 14.011C1.78833 14.001 0.896601 14.001 0.0048695 14.0103C-0.00494413 9.34241 0.00356099 4.67386 0.000944025 0.00596801Z"
                      fill="#3F3F3F"
                    />
                    <path
                      d="M10.8991 14.0104C10.8958 9.3405 10.8952 4.67062 10.8998 0.000732422C14.0427 0.010708 17.1864 0.00538825 20.33 0.00339314C20.3307 0.835354 20.3267 1.66731 20.332 2.49861C18.0624 2.49861 15.7922 2.49462 13.5226 2.50127C13.5298 3.47754 13.5233 4.45448 13.5259 5.43142C15.6103 5.4261 17.6941 5.42943 19.7785 5.42943C19.7706 6.2574 19.7798 7.08603 19.7726 7.914C17.6908 7.916 15.6083 7.91733 13.5265 7.91267C13.5213 9.11107 13.5318 10.3095 13.5213 11.5072C15.8936 11.5152 18.2659 11.5085 20.6388 11.5105C20.6447 12.3418 20.6447 13.1731 20.6388 14.0051C17.3925 14.0077 14.1454 13.9964 10.8991 14.0104Z"
                      fill="#3F3F3F"
                    />
                    <path
                      d="M22.6522 0.000732422C23.5969 0.00804782 24.5416 0.0100429 25.4864 0.000732422C27.1907 3.25475 28.8943 6.50878 30.6019 9.7608C30.6078 6.50944 30.6071 3.25808 30.6019 0.00738319C31.4347 0.00272794 32.2676 0.00871407 33.1004 0.00405882C33.1043 4.67195 33.1037 9.33983 33.1011 14.0077C32.21 14.0011 31.3189 14.0051 30.4285 14.0051C28.6804 10.6726 26.9283 7.34207 25.171 4.01423C25.1717 7.34606 25.1723 10.6772 25.1704 14.0091C24.331 14.0017 23.4909 13.9984 22.6509 14.011C22.6568 9.34116 22.6541 4.67062 22.6522 0.000732422Z"
                      fill="#3F3F3F"
                    />
                    <path
                      d="M35.6583 0.00341797C37.604 0.00940329 39.5497 0.00341716 41.4954 0.00674234C42.5625 0.0240333 43.6551 0.32995 44.4774 1.04619C45.3391 1.73251 45.8422 2.76731 46.1569 3.81075C46.4225 4.76108 46.5193 5.75199 46.5357 6.73757C46.4971 8.25984 46.2858 9.81868 45.5942 11.1887C45.1611 12.1377 44.4395 12.9563 43.5353 13.4611C42.8726 13.8275 42.1156 13.9818 41.3672 14.0018C39.466 14.0111 37.5641 13.9944 35.6629 14.0104C35.6498 9.34118 35.6589 4.67197 35.6583 0.00341797ZM38.3099 2.4441C38.3027 5.48398 38.306 8.52385 38.3079 11.5637C39.1539 11.5597 39.9992 11.5637 40.8451 11.5617C41.1912 11.5524 41.5445 11.5085 41.8637 11.3662C42.482 11.1069 42.921 10.5449 43.2121 9.95102C43.7035 8.86834 43.8108 7.64867 43.7787 6.47089C43.7493 5.34232 43.5805 4.13395 42.8484 3.23749C42.4081 2.68285 41.6793 2.49863 41.0106 2.45407C40.1104 2.43745 39.2101 2.4574 38.3099 2.4441Z"
                      fill="#3F3F3F"
                    />
                    <path
                      d="M48.3248 14.0136C48.315 9.34243 48.3163 4.67121 48.3242 0C49.2146 0.0133007 50.1057 0.00332502 50.9961 0.00399005C51 4.67055 51.002 9.33777 50.9954 14.005C50.105 14.009 49.2146 13.9917 48.3248 14.0136Z"
                      fill="#3F3F3F"
                    />
                  </svg>
                </div>

                <h2 className={s.catalogeSubTitle}>
                  Women Black Checked Fit and Flare Dress
                </h2>
              </div>
              <p className={s.catalogeText}>Select Color</p>
              {/* <div className={s.catalogeColorList}>
                <button className={s.catalogeColorItem}></button>
                <button className={s.catalogeColorItem}></button>
                <button className={s.catalogeColorItem}></button>
              </div> */}

              {/* ///////// */}

              <div className={s.catalogeColorList}>
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`${s.catalogeColorItem} ${
                      selectColor === color ? s.activeColor : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleSelectColor(color)}
                  />
                ))}
              </div>

              {/* /////////// */}

              <div className={s.selectBox}>
                <p className={s.selectText}>Select size (Inches)</p>
                <a href="./" className={s.selectLink}>
                  Size guide
                </a>
              </div>
                {/* ////// */}


                {/* ............ */}





                <select
                  className={s.selectSize}
                  value={selectSize}
                  onChange={(e) => setSelectSize(e.target.value)}
                >
                  <option value="">Виберіть розмір</option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>


                {/* ......................... */}

              <ul className={s.sizeList}>
                {sizes.map((size) => (
                  <li
                    key={size}
                    className={`${s.sizeItem} ${
                      selectSize === size ? s.activeSize : ""
                    }`}
                    onClick={() => handleSelectSize(size)}
                  >
                    <p className={s.sizeText}>{size}</p>
                  </li>
                ))}
              </ul>
                {/* //////// */}



              {/* <ul className={s.sizeList}>
                  <li className={s.sizeItem}>
                  <button className={`${s.btnCatalogeSize}`}>osfa</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w26</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w27</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w28</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w29</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={`${s.btnCatalogeSize} ${s.activeBtnCataloge}`}>w30</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w31</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w32</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w33</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w34</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w35</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w36</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w38</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w40</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w42</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w44</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w46</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w48</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w50</button>
                </li>
                <li className={s.sizeItem}>
                  <button className={s.btnCatalogeSize}>w52</button>
                </li>
              </ul> */}
              <div className={s.quantityBox}>
                <p className={s.quantityText}>Quantity</p>
                <p className={s.quantityTextSub}>price total</p>
              </div>
              <div className={s.euroWrap}>
                <div className={s.plusMinusBox}>
                  <button onClick={handleMinus} className={s.iconBtn}>
                    <svg
                      className={s.minusBoxIcon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <rect y="5" width="12" height="2" fill="#C4C4C4" />
                    </svg>
                  </button>

                  <p className={s.plusMinusText}>{quantity}</p>

                  <button onClick={handlePlus} className={s.iconBtn}>
                    <svg
                      className={s.plusBoxIcon}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <rect y="5" width="12" height="2" fill="#C4C4C4" />
                      <rect
                        x="7"
                        width="12"
                        height="2"
                        transform="rotate(90 7 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </button>
                </div>
                <p className={s.euroText}>{(90 * quantity).toFixed(2)} EUR</p>
              </div>
              <div className={s.btnBox}>
                <button className={s.btnAdd}>Add to bag</button>
                <button className={s.btnSave}>
                  {/* <svg>

                    </svg> */}
                  <p className={s.btnSaveText}>Save</p>
                </button>
              </div>
              <div>
                <ul className={s.underBtnList}>
                  <li className={s.underBtnItem}>
                    <p className={s.underBtnText}>Free shipping</p>
                  </li>
                  <li className={s.underBtnItem}>
                    <p className={s.underBtnText}>Product code: RFKK1024</p>
                  </li>
                  <li className={s.underBtnItem}>
                    <p className={s.underBtnText}>
                      TAGS: NEW arrivals, Top women
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
