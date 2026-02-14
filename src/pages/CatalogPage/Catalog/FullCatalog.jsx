import { useSelector } from "react-redux";

import { Catalog } from "./Catalog.jsx";
import { Sorting } from "../Sorting/Sorting.jsx";
import { Banner } from "../Banner/Banner.jsx";

import styles from "./Catalog.module.scss";

export function FullCatalog() {
	const userMedia = window.matchMedia("(min-width: 768px)");
	const products = useSelector((state) => state.products.products);

	return (
		<div className={styles.catalog}>
			<Sorting />
			<ul className={styles.catalog__list}>
				{products.map((item, index) => (
					<Catalog {...item} color={item.colors} style={styles} key={index} media={userMedia} />
				))}
			</ul>
			<Banner />
			<ul className={styles.catalog__list}>
				{products.map((item, index) => (
					<Catalog {...item} color={item.colors} style={styles} key={index} media={userMedia} />
				))}
			</ul>
		</div>
	);
}
