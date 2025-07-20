// import { Header } from "../../../src/components/Header/Header.jsx";
// import { Footer } from "../../../src/components/Footer/Footer.jsx";
import { Baner } from "../../src/pages/ArticlePage/baner/Baner.jsx";
import { ArticlesList } from "../../src/pages/ArticlePage/articlesList/ArticlesList.jsx";
import { Advertisement } from "../../src/pages/ArticlePage/advertisement/Advertisement.jsx";

export const ArticlePage = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <nav aria-label="breadcrumb">
          <ol>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Womens Dress</a>
            </li>
            <li>
              <a href="#">Angels malu</a>
            </li>
          </ol>
        </nav>
        <Baner />
        <ArticlesList />
        <Advertisement />
      </main>
      {/* <Footer /> */}
    </>
  );
};
