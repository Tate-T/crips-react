// import { Header } from "../../../src/components/Header/Header.jsx";
// import { Footer } from "../../../src/components/Footer/Footer.jsx";

import s from "./CardInfo.module.scss"

export const CardInfo = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        
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
                <svg width="24" height="24" className={s.mainIconMedia}>
                    <use  href="#search"></use>
                </svg>
            </li>
            <li className={s.mainIconItem}>
                <svg width="24" height="24" className={s.mainIconMedia}>
                    <use  href="#search"></use>
                </svg>
            </li>
            <li className={s.mainIconItem}>
                <svg width="24" height="24" className={s.mainIconMedia}>
                    <use  href="#search"></use>
                </svg>
            </li>
            <li className={s.mainIconItem}>
                <svg width="24" height="24" className={s.mainIconMedia}>
                    <use  href="./images/search.svg"></use>
                </svg>
            </li>
          </ul>
          </div>
          
          </div>

          
        

        <div className={s.catalogeMainBox}>
            <h2 className={s.catalogeTitle}>Home / Womens Dress / Angels malu</h2>
            <svg>
                
            </svg>
            <h2 className={s.catalogeSubTitle}>Women Black Checked Fit and Flare Dress</h2>
            <p className={s.catalogeText}>Select Color</p>
            <ul className={s.catalogeColorList}>
                <li className={s.catalogeColorItem}></li>
                <li className={s.catalogeColorItem}></li>
                <li className={s.catalogeColorItem}></li>
            </ul>
            <div className={s.selectBox}>
                <p className={s.selectText}>Select size (Inches)</p>
                <a href="./" className={s.selectLink}>Size guide</a>
            </div>
            <ul className={s.sizeList}>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>osfa</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w26</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w27</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w28</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w29</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w30</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w31</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w32</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w33</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w34</p>
                </li>

                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w35</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w36</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w38</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w40</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w42</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w44</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w46</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w48</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w50</p>
                </li>
                <li className={s.sizeItem}>
                    <p className={s.sizeText}>w52</p>
                </li>
            </ul>
            <div className={s.quantityBox}>
                <p className={s.quantityText}>Quantity</p>
                <p className={s.quantityTextSub}>price total</p>
            </div>
            <div>
                <div>
                    <svg></svg>
                    <p>1</p>
                    <svg></svg>
                </div>
                <p>90,00 EUR</p>
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
                        <p className={s.underBtnText}>TAGS: NEW arrivals, Top women</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        
      </main>
      {/* <Footer /> */}
    </>
  );
};
