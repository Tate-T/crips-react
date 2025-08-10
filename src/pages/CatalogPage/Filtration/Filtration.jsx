// import { useEffect, useRef } from "react";
// import { FiltrName } from "./Filtration-Components/FiltrationName.jsx";
// import "jquery-ui/themes/base/all.css";
// import "./Filtration.scss";
// import $ from "jquery";
// import "jquery-ui/ui/widgets/slider";

// export const Filtration = () => {
//   const sliderRef = useRef(null);
//   const amountRef = useRef(null);
//   const amountLastRef = useRef(null); 

//   useEffect(() => {
//     const $slider = $(sliderRef.current);
//     const $amount = $(amountRef.current);
//     const $amountLast = $(amountLastRef.current);

//     $slider.slider({
//       range: true,
//       min: 0,
//       max: 500,
//       values: [0, 500],
//       slide: function (event, ui) {
//         $amount.val(`${ui.values[0]}.00 EUR`);
//         $amountLast.val(`${ui.values[1]}.00 EUR`);
//       }
//     });

//     const initialValues = $slider.slider("values");
//     $amount.val(`${initialValues[0]}.00 EUR`);
//     $amountLast.val(`${initialValues[1]}.00 EUR`);

//     return () => {
//       if ($slider.hasClass("ui-slider")) {
//         $slider.slider("destroy");
//       }
//     };
//   }, []);
//   return (
//     <>
//       <section className="filtration">
//         <p className="catalog-way">Home / Womens Dress / Best Chose</p>
//         <div className="catalog-filtration__wrap">
//           <h2 className="catalog-filtration__title">Filter</h2>
//         </div>
//         <div className="catalog-filtration__brand">
//           <FiltrName className="brand" filtrName="Brand" />
//           <form action="" className="catalog-filtration__brand-form">
//             <div className="catalog-filtration__brand-input-wrap">
//               <input
//                 type="checkbox"
//                 className="catalog-filtration__brand-input"
//               />
//               <p className="catalog-filtration__brand-input-name">State</p>
//             </div>
//             <div className="catalog-filtration__brand-input-wrap">
//               <input
//                 type="checkbox"
//                 className="catalog-filtration__brand-input"
//               />
//               <p className="catalog-filtration__brand-input-name">Cooper</p>
//             </div>
//             <div className="catalog-filtration__brand-input-wrap">
//               <input
//                 type="checkbox"
//                 className="catalog-filtration__brand-input"
//               />
//               <p className="catalog-filtration__brand-input-name">bardot</p>
//             </div>
//             <div className="catalog-filtration__brand-input-wrap">
//               <input
//                 type="checkbox"
//                 className="catalog-filtration__brand-input"
//               />
//               <p className="catalog-filtration__brand-input-name">alfani</p>
//             </div>
//             <div className="catalog-filtration__brand-input-wrap">
//               <input
//                 type="checkbox"
//                 className="catalog-filtration__brand-input"
//               />
//               <p className="catalog-filtration__brand-input-name">cece</p>
//             </div>
//             <div className="catalog-filtration__brand-input-wrap">
//               <input
//                 type="checkbox"
//                 className="catalog-filtration__brand-input"
//               />
//               <p className="catalog-filtration__brand-input-name">
//                 donna ricco
//               </p>
//             </div>
//           </form>
//         </div>
//         <div className="catalog-filtration__size">
//           <FiltrName className="size" filtrName="Size (Inches)" />
//           <form action="" className="catalog-filtration__size-form">
//             <button className="catalog-filtration__size-button">osfa</button>
//             <button className="catalog-filtration__size-button">w26</button>
//             <button className="catalog-filtration__size-button">w27</button>
//             <button className="catalog-filtration__size-button">w28</button>
//             <button className="catalog-filtration__size-button">w29</button>
//             <button className="catalog-filtration__size-button">w30</button>
//             <button className="catalog-filtration__size-button">w31</button>
//             <button className="catalog-filtration__size-button active">w32</button>
//             <button className="catalog-filtration__size-button">w33</button>
//             <button className="catalog-filtration__size-button">w34</button>
//             <button className="catalog-filtration__size-button">w35</button>
//             <button className="catalog-filtration__size-button">w36</button>
//             <button className="catalog-filtration__size-button">w38</button>
//             <button className="catalog-filtration__size-button">w40</button>
//             <button className="catalog-filtration__size-button">w42</button>
//             <button className="catalog-filtration__size-button">w44</button>
//             <button className="catalog-filtration__size-button">w46</button>
//             <button className="catalog-filtration__size-button">w48</button>
//             <button className="catalog-filtration__size-button">w50</button>
//             <button className="catalog-filtration__size-button">w52</button>
//           </form>
//         </div>
//         <div className="catalog-filtration__dress-length">
//           <FiltrName className="dress-length" filtrName="Dress length" />
//           <form action="" className="catalog-filtration__dress-length-form">
//             <div className="catalog-filtration__dress-length-input-wrap">
//               <input
//                 type="checkbox"
//                 className="catalog-filtration__dress-length-input"
//               />
//               <p className="catalog-filtration__dress-length-name">short</p>
//             </div>
//             <div className="catalog-filtration__dress-length-input-wrap">
//               <input
//                 type="checkbox"
//                 className="catalog-filtration__dress-length-input"
//               />
//               <p className="catalog-filtration__dress-length-name">
//                 knee length
//               </p>
//             </div>
//             <div className="catalog-filtration__dress-length-input-wrap">
//               <input
//                 type="checkbox"
//                 className="catalog-filtration__dress-length-input"
//               />
//               <p className="catalog-filtration__dress-length-name">hight low</p>
//             </div>
//             <div className="catalog-filtration__dress-length-input-wrap">
//               <input
//                 type="checkbox"
//                 className="catalog-filtration__dress-length-input"
//               />
//               <p className="catalog-filtration__dress-length-name">long</p>
//             </div>
//             <div className="catalog-filtration__dress-length-input-wrap">
//               <input
//                 type="checkbox"
//                 className="catalog-filtration__dress-length-input"
//               />
//               <p className="catalog-filtration__dress-length-name">midi</p>
//             </div>
//           </form>
//         </div>
//         <div className="catalog-filtration__color">
//           <FiltrName className="color" filtrName="Color" />
//           <form action="" className="catalog-filtration__form-color">
//             <button
//               style={{ backgroundColor: "rgba(41, 42, 45, 1)" }}
//               className="catalog-filtration__form-color-btn"
//             ></button>
//             <button
//               style={{ backgroundColor: "rgba(243, 236, 226, 1)" }}
//               className="catalog-filtration__form-color-btn"
//             ></button>
//             <button
//               style={{ backgroundColor: "rgba(36, 66, 106, 1)" }}
//               className="catalog-filtration__form-color-btn"
//             ></button>
//             <button
//               style={{ backgroundColor: "rgba(41, 42, 45, 1)" }}
//               className="catalog-filtration__form-color-btn active"
//             ></button>
//             <button
//               style={{ backgroundColor: "rgba(102, 102, 137, 1)" }}
//               className="catalog-filtration__form-color-btn"
//             ></button>
//             <button
//               style={{ backgroundColor: "rgba(194, 190, 182, 1)" }}
//               className="catalog-filtration__form-color-btn"
//             ></button>
//             <button
//               style={{ backgroundColor: "rgba(170, 171, 167, 1)" }}
//               className="catalog-filtration__form-color-btn"
//             ></button>
//             <button
//               style={{ backgroundColor: "rgba(151, 30, 52, 1)" }}
//               className="catalog-filtration__form-color-btn"
//             ></button>
//             <button
//               style={{ backgroundColor: "rgba(203, 161, 62, 1)" }}
//               className="catalog-filtration__form-color-btn"
//             ></button>
//             <button
//               style={{ backgroundColor: "rgba(115, 81, 60, 1)" }}
//               className="catalog-filtration__form-color-btn"
//             ></button>
//             <button
//               style={{ backgroundColor: "rgba(218, 177, 177, 1)" }}
//               className="catalog-filtration__form-color-btn"
//             ></button>
//             <button
//               style={{ backgroundColor: "rgba(43, 159, 167, 1)" }}
//               className="catalog-filtration__form-color-btn"
//             ></button>
//           </form>
//         </div>
//         <div className="catalog-filtration__price">
//       <FiltrName className="price" filtrName="Price Range" />
//       <p className="catalog-filtration__price-text">
//         <input
//           type="text"
//           id="amount"
//           readOnly
//           ref={amountRef}
//           style={{ border: 0, color: "#f6931f", fontWeight: "bold" }}
//         />
//         <input
//           type="text"
//           id="amountLast"
//           readOnly
//           ref={amountLastRef}
//           style={{ border: 0, color: "#f6931f", fontWeight: "bold" }}
//         />
//       </p>
//       <div id="slider-range" ref={sliderRef}></div>
//     <button className="catalog-filtration__apply">Apply</button>
//     </div>
//         <div className="catalog-filtration__about-dresses">
//           <h2 className="catalog-filtration__about-dresses-title">
//             About Dresses
//           </h2>
//           <p className="catalog-filtration__about-dresses-text">
//             Every day we’re gonna be dropping the latest trends to help you nail
//             every Summer sitch. Whether it’s a graduation, your mate's wedding,
//             or just a cute day at the races with the gals, our occasion dresses
//             have got you covered. Not looking for something fancy? No stress.
//             We’ve got day dresses for days (aka bodycon dresses, t-shirt
//             dresses, oversized shirt dresses).
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };