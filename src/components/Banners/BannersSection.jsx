import style from "./Banners.module.scss";
import { Container } from "../Container/Container";
export const Banners = () => {
  return (
    <section className={`${style.banners} `}>
      <Container>
      <div className={`${style.bannersDoubleCentre} `}>
        <div className={`${style.bannersItem} ${style.banner1}`}>
          <div className={style.bannersBacImage1}></div>
          <div className={style.bannersContent}>
            <h2 className={style.bannersTitleChooseYL}>choose your look</h2>
            <p className={style.bannersDescription}>
              See our clothing collections
            </p>
            <button className={style.bannersButton}>see offers</button>
          </div>
        </div>

        <div className={`${style.bannersItem} ${style.banner2}`}>
          <div className={style.bannersBacImage2}>
            <div className={`${style.bannersContent} ${style.bannersContent2}`}>
              <h2 className={style.bannersTitleUpToOff}>Up to 40% off</h2>
              <p className={style.bannersDescription}>
                Special offers and great deals
              </p>
              <button className={style.bannersButton}>shop now</button>
            </div>
          </div>
        </div>

        <div className={`${style.bannersItem} ${style.banner3}`}>
          <div className={`${style.bannersContent} ${style.bannersContent3}`}>
            <h2 className={style.bannersTitleBrandNS}>brand new style</h2>
            <p className={style.bannersDescription}>Popular clothing brands</p>
            <button className={style.bannersButton}>see offers</button>
          </div>
          <div className={style.bannersBacImage3}></div>
        </div>
      </div>
      </Container>
    </section>
  );
};
