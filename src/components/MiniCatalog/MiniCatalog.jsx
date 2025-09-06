import { Component } from "react";

import { Container } from "../Container/Container.jsx";
import { MiniCatalogItem } from "./MiniCatalogItem.jsx";

import { miniCatalogData } from "../../data/mini-catalog-data.js";

import styles from "./MiniCatalog.module.scss";

export class MiniCatalog extends Component {
	constructor() {
		super();

		this.state = { data: miniCatalogData, currentPage: 1, step: 8 };
	}

	render() {
		return (
			<>
				<section className={styles["mini-catalog"]}>
					<Container>
						<div className={styles["mini-catalog__wrap"]}>
							<div className={styles["mini-catalog__main-wrap"]}>
								<h2 className={styles["mini-catalog__main-title"]}>Shop Some Wear:</h2>
								<ul className={styles["mini-catalog__main-list"]}>
									<li className={styles["mini-catalog__main-list__item"]}>
										<input className={styles["mini-catalog__main-list__checkbox"]} type="checkbox" />
										<p className={styles["mini-catalog__main-list__text"]}>best sellers</p>
									</li>
									<li className={styles["mini-catalog__main-list__item"]}>
										<input className={styles["mini-catalog__main-list__checkbox"]} type="checkbox" />
										<p className={styles["mini-catalog__main-list__text"]}>new arrivals</p>
									</li>
									<li className={styles["mini-catalog__main-list__item"]}>
										<input className={styles["mini-catalog__main-list__checkbox"]} type="checkbox" defaultChecked />
										<p className={styles["mini-catalog__main-list__text"]}>top women</p>
									</li>
									<li className={styles["mini-catalog__main-list__item"]}>
										<input className={styles["mini-catalog__main-list__checkbox"]} type="checkbox" />
										<p className={styles["mini-catalog__main-list__text"]}>collection: summer</p>
									</li>
									<li className={styles["mini-catalog__main-list__item"]}>
										<input className={styles["mini-catalog__main-list__checkbox"]} type="checkbox" />
										<p className={styles["mini-catalog__main-list__text"]}>collection: spring</p>
									</li>
									<li className={styles["mini-catalog__main-list__item"]}>
										<input className={styles["mini-catalog__main-list__checkbox"]} type="checkbox" />
										<p className={styles["mini-catalog__main-list__text"]}>trending</p>
									</li>
								</ul>
							</div>
							<aside className={styles["mini-catalog__aside"]}>
								<div className={styles["mini-catalog__list-wrap"]}>
									<ul className={styles["mini-catalog__list"]}>
										{this.state.data.slice(0, this.state.currentPage * this.state.step).map((item, id) => (
											<MiniCatalogItem img={item.img} category={item.category} title={item.title} price={item.price} discountPrice={item.discountPrice} key={id} />
										))}
									</ul>
									{this.state.data.slice(this.state.currentPage * this.state.step, (this.state.currentPage + 1) * this.state.step).length >= 4 && (
										<button
											className={styles["mini-catalog__load-button"]}
											onClick={() => {
												this.setState({ currentPage: this.state.currentPage + 1 });
											}}
										>
											load more
										</button>
									)}
								</div>
							</aside>
						</div>
					</Container>
				</section>
			</>
		);
	}
}
