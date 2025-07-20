import styles from "./MiniCatalog.module.scss";

export const MiniCatalogItem = ({ img, category, title, price }) => {
	return (
		<li className={styles["mini-catalog__item"]}>
			<img className={styles["mini-catalog__item-image"]} src={img} alt="" />
			<p className={styles["mini-catalog__item-category"]}>{category}</p>
			<p className={styles["mini-catalog__item-title"]}>{title}</p>
			<p className={styles["mini-catalog__item-price"]}>{price + " EUR"}</p>
		</li>
	);
};
