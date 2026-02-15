import styles from "./Banner.module.scss";
import { useSelector } from "react-redux";
import { BANNER_PHRASES } from "../../../data/banner-phrases";

export const Banner = () => {
  const { indices } = useSelector((state) => state.banner);

  return (
    <div className={styles["banner"]}>
      <div className={styles["banner__container"]}>
        <div className={styles["banner__content"]}>		
          <h1 className={styles["banner__title"]}>
            {BANNER_PHRASES.title[indices.title]}
          </h1>
          <p className={styles["banner__subtitle-d"]}>
            {BANNER_PHRASES.long[indices.long]}
          </p>
          <p className={styles["banner__subtitile"]}>
            {BANNER_PHRASES.short[indices.short]}
          </p>
          <button className={styles["banner__btn"]}>Shop Now</button>
        </div>
      </div>
    </div>
  );
};
export default Banner;