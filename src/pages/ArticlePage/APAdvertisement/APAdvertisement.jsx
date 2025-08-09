import styles from "../../../pages/ArticlePage/APAdvertisement/APAdvertisement.module.scss";
import advertisement1 from "../../../images/Article/ArticlePage-Advertisement1.jpg"
import advertisement2 from "../../../images/Article/ArticlePage-Advertisement2.jpg"

export const APAdvertisement = () => {
    return (
        <>
        <div className="advertisement-box">
            <img className={styles.advertisement1} src={advertisement1} alt="advertisement1" />
            <img className={styles.advertisement2} src={advertisement2} alt="advertisement2" />
        </div>
        </>
    )
}