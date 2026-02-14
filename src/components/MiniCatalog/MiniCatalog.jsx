import { useSelector, useDispatch } from "react-redux";

import { nextPage } from "../../redux/MiniCatalog/actions.js";

import { Container } from "../Container/Container.jsx";
import { MiniCatalogItem } from "./MiniCatalogItem.jsx";

import styles from "./MiniCatalog.module.scss";

export const MiniCatalog = function () {
	const dispatch = useDispatch();

	const step = 8;

	const currentPage = useSelector((state) => state.miniCatalog.currentPage);
	const products = useSelector((state) => state.products.products);

	const handleNextPage = () => dispatch(nextPage);

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
									{products.slice(0, currentPage * step).map((item, id) => (
										<MiniCatalogItem
											img={item.img}
											category={item.category}
											title={item.title}
											price={item.price}
											discountPrice={item.discount ? item.price - item.price * (item.discount / 100) : null}
											key={id}
										/>
									))}
								</ul>

								{products.slice(currentPage * step, (currentPage + 1) * step).length >= 4 && (
									<button className={styles["mini-catalog__load-button"]} onClick={handleNextPage}>
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
};
