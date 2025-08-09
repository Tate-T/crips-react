import { Header } from "../../../src/components/Header/Header.jsx";
import { Footer } from "../../../src/components/Footer/Footer.jsx";
import { APBaner } from "../../../src/pages/ArticlePage/APBaner/APBaner.jsx";
import { APArticlesList } from "../../../src/pages/ArticlePage/APArticles-list/APArticles-list.jsx";
import { APAdvertisement } from "../../../src/pages/ArticlePage/APAdvertisement/APAdvertisement.jsx";
import styles from "../../../src/pages/ArticlePage/ArticlePage.module.scss";
import { Container } from "../../components/Container/Container.jsx";

export const ArticlePage = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
        <nav className={styles.navigation} aria-label="breadcrumb">
          <ol className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <a className={styles.navigation__link} href="#">Home</a>
            </li>
            <li className={styles.navigation__item}>
              <a className={styles.navigation__link} href="#">Womens Dress</a>
            </li>
            <li className={styles.navigation__item}>
              <a className={styles.navigation__link} href="#">Angels malu</a>
            </li>
          </ol>
        </nav>
        <APBaner />
        <APArticlesList />
        <APAdvertisement />
        </Container>
      </main>
      <Footer />
    </>
  );
};
