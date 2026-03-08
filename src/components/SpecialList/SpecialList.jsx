import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { catalogData } from '../../data/catalog-data'
import { Container } from '../Container/Container'
import s from './SpecialList.module.scss'

import { next, prev, seeMore, setLayout } from '../../redux/specialList/specialListSlice'

export default function SpecialList({ title }) {
	const dispatch = useDispatch()

	const visibleCount = useSelector(state => state.specialList.visibleCount)
	const isDesktop = useSelector(state => state.specialList.isDesktop)
	const startIndex = useSelector(state => state.specialList.startIndex)

	useEffect(() => {
		const checkScreenSize = () => {
			const desktop = window.innerWidth >= 1200
			dispatch(setLayout(desktop))
		}

		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
		return () => window.removeEventListener('resize', checkScreenSize)
	}, [dispatch])

	const isPrevDisabled = startIndex === 0
	const isNextDisabled = startIndex + visibleCount >= catalogData.length
	const isSeeMoreHidden = visibleCount >= catalogData.length

	const formatPrice = value => `${parseFloat(value).toFixed(2)} EUR`

	const itemWidth = 210
	const gap = 29
	const translateX = startIndex * (itemWidth + gap)

	const currentItems = isDesktop
		? catalogData
		: catalogData.slice(0, visibleCount)

	return (
		<section className={s.special}>
			<Container>
				<div className={s.special__container}>
					<h2 className={s.special__title}>{title}</h2>

					{isDesktop && (
						<div>
							<button
								className={s.special__button}
								onClick={() => dispatch(prev())}
								disabled={isPrevDisabled}
							>
								<div className={`${s.arrow} ${s.arrow__left}`}></div>
							</button>

							<button
								className={s.special__button}
								onClick={() => dispatch(next(catalogData.length))}
								disabled={isNextDisabled}
							>
								<div className={`${s.arrow} ${s.arrow__right}`}></div>
							</button>
						</div>
					)}
				</div>

				{isDesktop ? (
					<div className={s.special__slider}>
						<ul
							className={s.special__track}
							style={{ transform: `translateX(-${translateX}px)` }}
						>
							{currentItems.map((item, index) => (
								<li
									className={s.special__item}
									key={index}
								>
									<a>
										<img
											className={s.special__image}
											src={item.img}
											alt={item.name}
										/>
										<div className={s.special__info}>
											<p className={s.special__top}>{item.top}</p>
											<h3 className={s.special__name}>{item.name}</h3>

											{item.discountPrice ? (
												<p
													className={`${s.special__price} ${s.special__priceDiscount}`}
												>
													{formatPrice(item.discountPrice)}
													<span className={s.special__priceOld}>
														{formatPrice(item.price)}
													</span>
												</p>
											) : (
												<p className={s.special__price}>
													{formatPrice(item.price)}
												</p>
											)}
										</div>
									</a>
								</li>
							))}
						</ul>
					</div>
				) : (
					<ul className={s.special__list}>
						{currentItems.map((item, index) => (
							<li
								className={s.special__item}
								key={index}
							>
								<a>
									<img
										className={s.special__image}
										src={item.img}
										alt={item.name}
									/>
									<div className={s.special__info}>
										<p className={s.special__top}>{item.top}</p>
										<h3 className={s.special__name}>{item.name}</h3>

										{item.discountPrice ? (
											<p
												className={`${s.special__price} ${s.special__priceDiscount}`}
											>
												{formatPrice(item.discountPrice)}
												<span className={s.special__priceOld}>
													{formatPrice(item.price)}
												</span>
											</p>
										) : (
											<p className={s.special__price}>
												{formatPrice(item.price)}
											</p>
										)}
									</div>
								</a>
							</li>
						))}
					</ul>
				)}

				{!isSeeMoreHidden && !isDesktop && (
					<button
						onClick={() => dispatch(seeMore(catalogData.length))}
						className={s.special__moreBtn}
					>
						See More
					</button>
				)}
			</Container>
		</section>
	)
}
