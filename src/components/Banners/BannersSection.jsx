import style from "./Banners.module.scss";

export const Banners = () => {
  return (
    <section className={`${style.banners} ${style.container}`}>
      <div className={style.bannersDoubleCentre}>
        <div className={`${style.bannersItem} ${style.banner1}`}>
          <div className={style.bannersBacImage1}></div>
          <h2 className={style.bannersTitleChooseYL}>choose your look</h2>
          <p className={style.bannersDescription}>
            See our clothing collections
          </p>
          <button className={style.bannersButton}>see offers</button>
        </div>

        <div className={`${style.bannersItem} ${style.banner2}`}>
          <h2 className={style.bannersTitleBrandNS}>brand new style</h2>
          <p className={style.bannersDescription}>Popular clothing brands</p>
          <button className={style.bannersButton}>see offers</button>
           <div className={style.bannersBacImage2}></div>
        </div>
      </div>

      <div className={`${style.bannersItem} ${style.banner3}`}>
        <div className={style.bannersBacImage3}>
        <h2 className={style.bannersTitleUpToOff}>Up to 40% off</h2>
        <p className={style.bannersDescription}>
          Special offers and great deals
        </p>
        <button className={style.bannersButton}>shop now</button>
         </div>
      </div>
    </section>
  );
};
