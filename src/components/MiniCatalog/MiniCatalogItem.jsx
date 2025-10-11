import styles from "./MiniCatalog.module.scss";

export const MiniCatalogItem = ({ img, category, title, price, discountPrice }) => {
	return (
		<li className={styles["mini-catalog__item"]}>
			<img className={styles["mini-catalog__item-image"]} src={img} alt="" />
			<p className={styles["mini-catalog__item-category"]}>{category}</p>
			<p className={styles["mini-catalog__item-title"]}>{title}</p>
			{discountPrice ? (
				<p className={`${styles["mini-catalog__item-price"]} ${styles["mini-catalog__item-price-discount"]}`}>
					{discountPrice + " EUR"} <span className={styles["mini-catalog__item-price-old"]}>{price + " EUR"}</span>
				</p>
			) : (
				<p className={styles["mini-catalog__item-price"]}>{price + " EUR"}</p>
			)}
		</li>
	);
};
