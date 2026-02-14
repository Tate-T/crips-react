import { Header } from "../../../src/components/Header/Header.jsx";
import { Footer } from "../../../src/components/Footer/Footer.jsx";
import { APBaner } from "../../../src/pages/ArticlePage/APBaner/APBaner.jsx";
import { APArticlesList } from "../../../src/pages/ArticlePage/APArticles-list/APArticles-list.jsx";
import { APAdvertisement } from "../../../src/pages/ArticlePage/APAdvertisement/APAdvertisement.jsx";
import {
  Navigation,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "../../../src/pages/ArticlePage/ArticlePage.js";
import { Container } from "../../components/Container/Container.jsx";
import SpecialList from "../../components/SpecialList/SpecialList.jsx";

export const ArticlePage = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Navigation aria-label="breadcrumb">
            <NavigationList>
              <NavigationItem>
                <NavigationLink href="#">Home /</NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink href="#">Womens Dress /</NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink href="#">Angels malu</NavigationLink>
              </NavigationItem>
            </NavigationList>
          </Navigation>
          <APBaner />
          <APArticlesList />
          <APAdvertisement />
          <SpecialList title="You May Also Like" />
        </Container>
      </main>
      <Footer />
    </>
  );
};
