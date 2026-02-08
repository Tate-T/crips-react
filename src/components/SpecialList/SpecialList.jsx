import { useState, useEffect } from "react";
import { catalogData } from "../../data/catalog-data";
import s from "./SpecialList.module.scss";
import { Container } from "../Container/Container";

export default function SpecialList({ title }) {
	const [seeMoreActive, setSeeMoreActive] = useState(true);
	const [visibleCount, setVisibleCount] = useState(4);
	const [isDesktop, setIsDesktop] = useState(false);
	const [startIndex, setStartIndex] = useState(0);

	const checkScreenSize = () => {
		const desktop = window.innerWidth >= 1200;
		if (desktop) {
			setSeeMoreActive(false);
			setIsDesktop(true);
			setVisibleCount(5);
			setStartIndex(0);
		} else {
			setSeeMoreActive(true);
			setIsDesktop(false);
			setVisibleCount(4);
		}
	};

	useEffect(() => {
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	const handleSeeMore = () => {
		setVisibleCount((prev) => Math.min(prev + 4, catalogData.length));
	};

	const handlePrev = () => {
		setStartIndex((prev) => Math.max(prev - 1, 0));
	};

	const handleNext = () => {
		if (startIndex + visibleCount < catalogData.length) {
			setStartIndex((prev) => prev + 1);
		}
	};

	const isPrevDisabled = startIndex === 0;
	const isNextDisabled = startIndex + visibleCount >= catalogData.length;
	const isSeeMoreHidden = visibleCount >= catalogData.length;

	const currentItems = isDesktop ? catalogData.slice(startIndex, startIndex + visibleCount) : catalogData.slice(0, visibleCount);

	return (
		<section className={s.special}>
			<Container>
				<div className={s.special__container}>
					<h2 className={s.special__title}>{title}</h2>

					{isDesktop && (
						<div>
							<button className={s.special__button} onClick={handlePrev} disabled={isPrevDisabled}>
								<div className={`${s.arrow} ${s.arrow__left}`}></div>
							</button>
							<button className={s.special__button} onClick={handleNext} disabled={isNextDisabled}>
								<div className={`${s.arrow} ${s.arrow__right}`}></div>
							</button>
						</div>
					)}
				</div>
				<ul className={s.special__list}>
					{currentItems.map((item, index) => (
						<li className={s.special__item} key={index}>
							<a>
								<img className={s.special__image} src={item.img} alt={item.name} />
								<div className={s.special__info}>
									<p className={s.special__top}>{item.top}</p>
									<h3 className={s.special__name}>{item.name}</h3>
									<p className={s.special__price}>{item.price}</p>
								</div>
							</a>
						</li>
					))}
				</ul>
				{!isSeeMoreHidden && (
					<button onClick={handleSeeMore} className={s.special__moreBtn}>
						See More
					</button>
				)}
			</Container>
		</section>
	);
}

// import {Component} from 'react';
// import {catalogData} from '../../data/catalog-data.js';
// import styles from './SpecialList.module.scss';
// import {Container} from '../Container/Container.jsx';
//
// class SpecialList extends Component {
// 	constructor() {
// 		super();
//
// 		this.state = {
// 			seeMoreActive: true,
// 			visibleCount: 4,
// 			isDesktop: false,
// 			startIndex: 0
// 		};
// 	}
//
// 	componentDidMount() {
// 		this.checkScreenSize()
// 		window.addEventListener("resize", this.checkScreenSize);
// 	}
//
// 	componentWillUnmount() {
// 		window.removeEventListener("resize", this.checkScreenSize)
// 	}
//
// 	checkScreenSize = () => {
// 		const desktop = window.innerWidth >= 1200;
// 		if (desktop) {
// 			this.setState({
// 				seeMoreActive: false,
// 				isDesktop: true,
// 				visibleCount: 5,
// 				startIndex: 0
// 			});
// 		} else {
// 			this.setState({
// 				seeMoreActive: true,
// 				isDesktop: false,
// 				visibleCount: 4
// 			});
// 		}
// 	};
//
// 	handleSeeMore = () => {
// 		this.setState((prev) => ({
// 			visibleCount: Math.min(prev.visibleCount + 4, catalogData.length)
// 		}));
// 	};
//
// 	handlePrev = () => {
// 		if (this.state.startIndex > 0) {
// 			this.setState((prev) => ({
// 				startIndex: prev.startIndex - 1
// 			}));
// 		}
// 	};
// 	handleNext = () => {
// 		if (this.state.startIndex + this.state.visibleCount < catalogData.length) {
// 			this.setState((prev) => ({
// 				startIndex: prev.startIndex + 1
// 			}));
// 		}
// 	};
//
// 	render() {
// 		const {title} = this.props;
// 		const {seeMoreActive, visibleCount, isDesktop, startIndex} = this.state;
//
// 		const isPrevDisabled = startIndex === 0;
// 		const isNextDisabled = startIndex + visibleCount >= catalogData.length;
//
// 		const currentItems = isDesktop
// 			? catalogData.slice(startIndex, startIndex + visibleCount)
// 			: catalogData.slice(0, visibleCount);
//
// 		const isSeeMoreHidden = visibleCount >= catalogData.length;
//
// 		return (
// 			<section className={styles.special}>
// 				<Container>
// 					<div className={styles.special__container}>
// 						<h2 className={styles.special__title}>{title}</h2>
//
// 						{isDesktop && (
// 							<div>
// 								<button
// 									className={styles.special__button}
// 									onClick={this.handlePrev}
// 									disabled={isPrevDisabled}
// 								>
// 									<div className={`${styles.arrow} ${styles.arrow__left}`}></div>
// 								</button>
// 								<button
// 									className={styles.special__button}
// 									onClick={this.handleNext}
// 									disabled={isNextDisabled}
// 								>
// 									<div className={`${styles.arrow} ${styles.arrow__right}`}></div>
// 								</button>
// 							</div>
// 						)}
// 					</div>
//
// 					<ul className={styles.special__list}>
// 						{currentItems.map((item, index) => (
// 							<li
// 								className={styles.special__item}
// 								key={index}
// 							>
// 								<a>
// 									<img
// 										className={styles.special__image}
// 										src={item.img}
// 										alt={item.name}
// 									/>
// 									<div className={styles.special__info}>
// 										<p className={styles.special__top}>{item.top}</p>
// 										<h3 className={styles.special__name}>{item.name}</h3>
// 										<p className={styles.special__price}>{item.price}</p>
// 									</div>
// 								</a>
// 							</li>
// 						))}
// 					</ul>
//
// 					{!isSeeMoreHidden && (
// 						<button
// 							onClick={this.handleSeeMore}
// 							className={styles.special__moreBtn}
// 						>
// 							See More
// 						</button>
// 					)}
// 				</Container>
// 			</section>
// 		);
// 	}
// }
//
// export default SpecialList;
//
