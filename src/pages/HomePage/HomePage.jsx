import { Header } from "../../components/Header/Header.jsx";
// import { Footer } from "../../components/Footer/Footer.jsx";
import { CreateOrder } from "../CabinetPage/CreateOrder/CreateOrder.jsx";
import { CatalogSection } from "../CatalogPage/CatalogPage.jsx";
import { MiniCatalog } from "../../components/MiniCatalog/MiniCatalog.jsx";
import { Blog } from "../main-page/blog/blog.jsx";

export const HomePage = () => {
	return (
		<>
			<Header />
			<main>
				<MiniCatalog />
				<CatalogSection />
				<CreateOrder />
				<Blog />
			</main>
			{/* <Footer /> */}
		</>
	);
};
