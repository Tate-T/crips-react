import { Container } from "../Container/Container.jsx";
import { MiniCatalogItem } from "./MiniCatalogItem.jsx";
import { featuredItemsData, mostPopularData } from "../../data/mini-catalog-data.js";
import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";
import styles from "./MiniCatalog.module.scss";

export const MiniCatalog = () => {
	return (
		<>
			<section className={styles["mini-catalog"]}>
				<Container>
					<div className={`${styles["mini-catalog__list-wrap"]} ${styles["mini-catalog__list-wrap--featured"]}`}>
						<div className={`${styles["mini-catalog__top-wrap"]} ${styles["mini-catalog__top-wrap--featured"]}`}>
							<h2 className={`${styles["mini-catalog__title"]} ${styles["mini-catalog__title--featured"]}`}>Featured Items</h2>
							<div className={styles["mini-catalog__button-wrap"]}>
								<button className={styles["mini-catalog__button"]}>
									<svg width="8" height="14">
										<use href={arrowLeft}></use>
									</svg>
								</button>
								<button className={styles["mini-catalog__button"]}>
									<svg width="8" height="14">
										<use href={arrowRight}></use>
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
							<div className={styles["mini-catalog__button-wrap"]}>
								<button className={styles["mini-catalog__button"]}>
									<svg width="8" height="14">
										<use href={arrowLeft}></use>
									</svg>
								</button>
								<button className={styles["mini-catalog__button"]}>
									<svg width="8" height="14">
										<use href={arrowRight}></use>
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
				</Container>
			</section>
		</>
	);
};
