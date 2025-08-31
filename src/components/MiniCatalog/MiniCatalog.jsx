import { Component } from "react";

import { Container } from "../Container/Container.jsx";
import { MiniCatalogItem } from "./MiniCatalogItem.jsx";

import { miniCatalogData } from "../../data/mini-catalog-data.js";

import styles from "./MiniCatalog.module.scss";

export class MiniCatalog extends Component {
	render() {
		return (
			<>
				<section className={styles["mini-catalog"]}>
					<Container>
						<div className={styles["mini-catalog__wrap"]}>
							<div className={styles["mini-catalog__main-wrap"]}>
								<h2 className={styles["mini-catalog__main-title"]}>Shop Some Wear:</h2>
								<ul className={styles["mini-catalog__main-list"]}>
									<li className={styles["mini-catalog__main-item"]}>
										<input className={styles["mini-catalog__main-checkbox"]} type="checkbox" />
										<p className={styles["mini-catalog__main-text"]}>best sellers</p>
									</li>
									<li className={styles["mini-catalog__main-item"]}>
										<input className={styles["mini-catalog__main-checkbox"]} type="checkbox" />
										<p className={styles["mini-catalog__main-text"]}>new arrivals</p>
									</li>
									<li className={styles["mini-catalog__main-item"]}>
										<input className={styles["mini-catalog__main-checkbox"]} type="checkbox" checked />
										<p className={styles["mini-catalog__main-text"]}>top women</p>
									</li>
									<li className={styles["mini-catalog__main-item"]}>
										<input className={styles["mini-catalog__main-checkbox"]} type="checkbox" />
										<p className={styles["mini-catalog__main-text"]}>collection summer</p>
									</li>
									<li className={styles["mini-catalog__main-item"]}>
										<input className={styles["mini-catalog__main-checkbox"]} type="checkbox" />
										<p className={styles["mini-catalog__main-text"]}>collection spring</p>
									</li>
									<li className={styles["mini-catalog__main-item"]}>
										<input className={styles["mini-catalog__main-checkbox"]} type="checkbox" />
										<p className={styles["mini-catalog__main-text"]}>trending</p>
									</li>
								</ul>
							</div>
							<aside className={styles["mini-catalog__aside"]}>
								<div className={styles["mini-catalog__list-wrap"]}>
									<ul className={styles["mini-catalog__list"]}>
										{miniCatalogData.map((item) => (
											<MiniCatalogItem img={item.img} category={item.category} title={item.title} price={item.price} />
										))}
									</ul>
								</div>
							</aside>
						</div>
					</Container>
				</section>
			</>
		);
	}
}
