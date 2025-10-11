import {Component} from 'react';
import {catalogData} from '../../data/catalog-data.js';
import styles from './SpecialList.module.scss';
import {Container} from '../Container/Container.jsx';

class SpecialList extends Component {
	constructor() {
		super();
		
		this.state = {
			seeMoreActive: true,
			visibleCount: 4,
			isDesktop: false,
			startIndex: 0
		};
	}
	
	componentDidMount() {
		this.checkScreenSize()
		window.addEventListener("resize", this.checkScreenSize);
	}
	
	componentWillUnmount() {
		window.removeEventListener("resize", this.checkScreenSize)
	}
	
	checkScreenSize = () => {
		const desktop = window.innerWidth >= 1200;
		if (desktop) {
			this.setState({
				seeMoreActive: false,
				isDesktop: true,
				visibleCount: 5,
				startIndex: 0
			});
		} else {
			this.setState({
				seeMoreActive: true,
				isDesktop: false,
				visibleCount: 4
			});
		}
	};
	
	handleSeeMore = () => {
		this.setState((prev) => ({
			visibleCount: Math.min(prev.visibleCount + 4, catalogData.length)
		}));
	};
	
	handlePrev = () => {
		if (this.state.startIndex > 0) {
			this.setState((prev) => ({
				startIndex: prev.startIndex - 1
			}));
		}
	};
	handleNext = () => {
		if (this.state.startIndex + this.state.visibleCount < catalogData.length) {
			this.setState((prev) => ({
				startIndex: prev.startIndex + 1
			}));
		}
	};
	
	render() {
		const {title} = this.props;
		const {seeMoreActive, visibleCount, isDesktop, startIndex} = this.state;
		
		const isPrevDisabled = startIndex === 0;
		const isNextDisabled = startIndex + visibleCount >= catalogData.length;
		
		const currentItems = isDesktop
			? catalogData.slice(startIndex, startIndex + visibleCount)
			: catalogData.slice(0, visibleCount);
		
		const isSeeMoreHidden = visibleCount >= catalogData.length;
		
		return (
			<section className={styles.special}>
				<Container>
					<div className={styles.special__container}>
						<h2 className={styles.special__title}>{title}</h2>
						
						{isDesktop && (
							<div>
								<button
									className={styles.special__button}
									onClick={this.handlePrev}
									disabled={isPrevDisabled}
								>
									<div className={`${styles.arrow} ${styles.arrow__left}`}></div>
								</button>
								<button
									className={styles.special__button}
									onClick={this.handleNext}
									disabled={isNextDisabled}
								>
									<div className={`${styles.arrow} ${styles.arrow__right}`}></div>
								</button>
							</div>
						)}
					</div>
					
					<ul className={styles.special__list}>
						{currentItems.map((item, index) => (
							<li
								className={styles.special__item}
								key={index}
							>
								<a>
									<img
										className={styles.special__image}
										src={item.img}
										alt={item.name}
									/>
									<div className={styles.special__info}>
										<p className={styles.special__top}>{item.top}</p>
										<h3 className={styles.special__name}>{item.name}</h3>
										<p className={styles.special__price}>{item.price}</p>
									</div>
								</a>
							</li>
						))}
					</ul>
					
					{!isSeeMoreHidden && (
						<button
							onClick={this.handleSeeMore}
							className={styles.special__moreBtn}
						>
							See More
						</button>
					)}
				</Container>
			</section>
		);
	}
}

export default SpecialList;

