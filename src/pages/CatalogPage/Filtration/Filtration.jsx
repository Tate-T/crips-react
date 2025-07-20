import { FiltrName } from "../Filtration-Components/FiltrationName.jsx";

export const Filtration = () => {
  return (
    <>
      <section className="filtration">
        <p className="catalog-way">Home / Womens Dress / Best Chose</p>
        <div className="catalog-filtration__wrap">
          <h2>Filter</h2>
        </div>
        <div className="catalog-filtration__brand">
          <FiltrName className="brand" filtrName="Brand" />
          <form action="">
            <input type="checkbox" />
            <p>State</p>
            <input type="checkbox" />
            <p>Cooper</p>
            <input type="checkbox" />
            <p>bardot</p>
            <input type="checkbox" />
            <p>alfani</p>
            <input type="checkbox" />
            <p>cece</p>
            <input type="checkbox" />
            <p>donna ricco</p>
          </form>
        </div>
        <div className="catalog-filtration__size">
          <FiltrName className="size" filtrName="Size (Inches)" />
          <form action="">
            <button>osfa</button>
            <button>w26</button>
            <button>w27</button>
            <button>w28</button>
            <button>w29</button>
            <button>w30</button>
            <button>w31</button>
            <button>w32</button>
            <button>w33</button>
            <button>w34</button>
            <button>w35</button>
            <button>w36</button>
            <button>w38</button>
            <button>w40</button>
            <button>w42</button>
            <button>w44</button>
            <button>w46</button>
            <button>w48</button>
            <button>w50</button>
            <button>w52</button>
          </form>
        </div>
        <div className="catalog-filtration__dress-length">
          <FiltrName className="dress-length" filtrName="Dress length" />
          <form action="">
            <input type="checkbox" />
            <p>short</p>
            <input type="checkbox" />
            <p>knee length</p>
            <input type="checkbox" />
            <p>hight low</p>
            <input type="checkbox" />
            <p>long</p>
            <input type="checkbox" />
            <p>midi</p>
          </form>
        </div>
        <div className="catalog-filtration__color">
          <FiltrName className="color" filtrName="Color" />
          <form action="">
            <button style={{ backgroundColor: "rgba(41, 42, 45, 1)" }} className="catalog-filtration__form-color-btn"></button>
            <button style={{ backgroundColor: "rgba(243, 236, 226, 1)" }} className="catalog-filtration__form-color-btn"></button>
            <button style={{ backgroundColor: "rgba(36, 66, 106, 1)" }} className="catalog-filtration__form-color-btn"></button>
            <button style={{ backgroundColor: "rgba(41, 42, 45, 1)" }} className="catalog-filtration__form-color-btn"></button>
            <button style={{ backgroundColor: "rgba(102, 102, 137, 1)" }} className="catalog-filtration__form-color-btn"></button>
            <button style={{ backgroundColor: "rgba(194, 190, 182, 1)" }} className="catalog-filtration__form-color-btn"></button>
            <button style={{ backgroundColor: "rgba(170, 171, 167, 1)" }} className="catalog-filtration__form-color-btn"></button>
            <button style={{ backgroundColor: "rgba(151, 30, 52, 1)" }} className="catalog-filtration__form-color-btn"></button>
            <button style={{ backgroundColor: "rgba(203, 161, 62, 1)" }} className="catalog-filtration__form-color-btn"></button>
            <button style={{ backgroundColor: "rgba(115, 81, 60, 1)" }} className="catalog-filtration__form-color-btn"></button>
            <button style={{ backgroundColor: "rgba(218, 177, 177, 1)" }} className="catalog-filtration__form-color-btn"></button>
            <button style={{ backgroundColor: "rgba(43, 159, 167, 1)" }} className="catalog-filtration__form-color-btn"></button>
          </form>
        </div>
        <div className="catalog-filtration__price">
          <FiltrName className="price" filtrName="Price Range" />
        </div>
        <div className="catalog-filtration__about-dresses">
          <h2>About Dresses</h2>
          <p>
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
