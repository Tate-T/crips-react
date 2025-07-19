// import { Header } from "../../components/Header/Header.jsx";
// import { Footer } from "../../components/Footer/Footer.jsx";
import { featuredItemsData, mostPopularData } from "../../data/mini-catalog-data.js";

export const HomePage = () => {
	return (
		<>
			{/* <Header /> */}
			<main>
				<h2 className="featured-items-title">Featured Items</h2>
				<ul className="featured-items-list">
					{featuredItemsData.map((item) => (
						<li>
							<img src={item.img} alt="" />
							<p className="featured-items-list-category">{item.category}</p>
							<p className="featured-items-list-title">{item.title}</p>
							<p className="featured-items-list-price">{item.price} EUR</p>
						</li>
					))}
				</ul>
				<h2 className="most-popular-title">Most Popular</h2>
				<ul className="most-popular-list">
					{mostPopularData.map((item) => (
						<li>
							<img src={item.img} alt="" />
							<p className="most-popular-list-category">{item.category}</p>
							<p className="most-popular-list-title">{item.title}</p>
							<p className="most-popular-list-price">{item.price} EUR</p>
						</li>
					))}
				</ul>
			</main>
			{/* <Footer /> */}
		</>
	);
};
