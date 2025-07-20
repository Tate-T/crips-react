export const MiniCatalogItem = ({ img, category, title, price }) => {
	return (
		<li>
			<img className="mini-catalog-list-img" src={img} alt="" />
			<p className="mini-catalog-list-category">{category}</p>
			<p className="mini-catalog-list-title">{title}</p>
			<p className="mini-catalog-list-price">{price + " EUR"}</p>
		</li>
	);
};
