import { useStyle } from "../../hooks/useStyle.js";

import baseStyle from "./MiniCatalog.module.scss";
import darkStyle from "./dark.module.scss";
import lightStyle from "./light.module.scss";

export const MiniCatalogItem = ({ img, category, name, price, discountPrice }) => {
	const styles = useStyle(baseStyle, darkStyle, lightStyle);

	console.log(styles["mini-catalog__item"])

	return (
		<li className={styles["mini-catalog__item"]}>
			<img className={styles["mini-catalog__item__image"]} src={img} alt="" />
			<p className={styles["mini-catalog__item__category"]}>{category}</p>
			<p className={styles["mini-catalog__item__title"]}>{name}</p>
			{discountPrice ? (
				<p className={`${styles["mini-catalog__item__price"]} ${styles["mini-catalog__item__price--discount"]}`}>
					{parseFloat(discountPrice).toFixed(2) + " EUR"} <span className={styles["mini-catalog__item__price--old"]}>{parseFloat(price).toFixed(2) + " EUR"}</span>
				</p>
			) : (
				<p className={styles["mini-catalog__item__price"]}>{parseFloat(price).toFixed(2) + " EUR"}</p>
			)}
		</li>
	);
};
