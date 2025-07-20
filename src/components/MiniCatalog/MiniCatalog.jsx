import { MiniCatalogItem } from "./MiniCatalogItem.jsx";
import { featuredItemsData, mostPopularData } from "../../data/mini-catalog-data.js";

export const MiniCatalog = () => {
	return (
		<>
			<h2 className="featured-items-title">Featured Items</h2>
			<ul className="featured-items-list">
				{featuredItemsData.map((item) => (
					<MiniCatalogItem img={item.img} category={item.category} title={item.title} price={item.price} />
				))}
			</ul>
			<h2 className="most-popular-title">Most Popular</h2>
			<ul className="most-popular-list">
				{mostPopularData.map((item) => (
					<MiniCatalogItem img={item.img} category={item.category} title={item.title} price={item.price} />
				))}
			</ul>
		</>
	);
};
