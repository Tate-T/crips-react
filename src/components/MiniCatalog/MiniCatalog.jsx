import { MiniCatalogItem } from "./MiniCatalogItem.jsx";
import { featuredItemsData, mostPopularData } from "../../data/mini-catalog-data.js";
import styles from "./MiniCatalog.module.scss";

export const MiniCatalog = () => {
	return (
		<>
			<section className={styles["mini-catalog"]}>
				<div className="container">
					<div className={`${styles["mini-catalog__list-wrap"]} ${styles["mini-catalog__list-wrap--featured"]}`}>
						<div className={`${styles["mini-catalog__top-wrap"]} ${styles["mini-catalog__top-wrap--featured"]}`}>
							<h2 className={`${styles["mini-catalog__title"]} ${styles["mini-catalog__title--featured"]}`}>Featured Items</h2>
							<div className="mini-catalog__btn-wrap">
								<button className="mini-catalog__btn">
									<svg>
										<use></use>
									</svg>
								</button>
								<button className="mini-catalog__btn">
									<svg>
										<use></use>
									</svg>
								</button>
							</div>
						</div>
						<ul className={`${styles["mini-catalog__list"]} ${styles["mini-catalog__list--featured"]}`}>
							{featuredItemsData.map((item) => (
								<MiniCatalogItem img={item.img} category={item.category} title={item.title} price={item.price} />
							))}
						</ul>
					</div>
					<div className={`${styles["mini-catalog__list-wrap"]} ${styles["mini-catalog__list-wrap--popular"]}`}>
						<div className={`${styles["mini-catalog__top-wrap"]} ${styles["mini-catalog__top-wrap--popular"]}`}>
							<h2 className={`${styles["mini-catalog__title"]} ${styles["mini-catalog__title--popular"]}`}>Most Popular</h2>
							<div className="mini-catalog__btn-wrap">
								<button className="mini-catalog__btn">
									<svg>
										<use></use>
									</svg>
								</button>
								<button className="mini-catalog__btn">
									<svg>
										<use></use>
									</svg>
								</button>
							</div>
						</div>
						<ul className={`${styles["mini-catalog__list"]} ${styles["mini-catalog__list--popular"]}`}>
							{mostPopularData.map((item) => (
								<MiniCatalogItem img={item.img} category={item.category} title={item.title} price={item.price} />
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};
