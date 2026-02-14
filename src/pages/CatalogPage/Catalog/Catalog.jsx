import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export function Catalog({ style, img, name, category, colors, price, media, id, discount }) {
	const discountPrice = discount ? price - price * (discount / 100) : null;

	return (
		<NavLink to={id} className={style.catalog__item}>
			<img className={style.catalog__img} src={img} alt="#" />
			<p className={style.catalog__top}>{category}</p>
			<h3 className={style.catalog__title}>{name}</h3>

			{discountPrice ? (
				<>
					<p className={style["catalog__price--discount"]}>
						{parseFloat(discountPrice).toFixed(2) + " EUR"} <span className={style["catalog__price--old"]}>{parseFloat(price).toFixed(2) + " EUR"}</span>
					</p>
				</>
			) : (
				<>
					<p className={style.catalog__price}>{parseFloat(price).toFixed(2) + " EUR"}</p>
				</>
			)}

			<ul className={style.catalog__colors}>
				{media
					? colors.map((item, index) => (
							<li className={style.colors__item} key={index}>
								<button type="button" className={style.catalog__color}>
									<div className={style.color} style={{ backgroundColor: item }}></div>
								</button>
							</li>
						))
					: undefined}
			</ul>
		</NavLink>
	);
}

Catalog.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	colors: PropTypes.array.isRequired,
	price: PropTypes.string.isRequired,
	style: PropTypes.object.isRequired
};
