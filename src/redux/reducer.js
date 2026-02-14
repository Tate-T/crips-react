import { combineReducers } from "redux";
import { userDataReducer } from "./userData/reducer";
import { HeaderReducer } from "./Header/reducer";
import { specialListReducer } from "./specialList/reducer";
import { filtrationReducer } from "./filtration/reducer";
import { cardInfoReducer } from "./cardInfo/reducer";
import { tableReducer } from "./table/reducer";
import { blogReducer } from "./blog/reducer";
import { bannerReducer } from "./banner/reducer";
import { createOrderReducer } from "./createOrder/reducer";
import { footerReducer } from "./footer/reducer";
import { wishlistReducer } from "./Wishlist/reducer";

import { productsReducer } from "./products/reducer";
import { miniCatalogReducer } from "./MiniCatalog/reducer";

export const rootReducer = combineReducers({
  products: productsReducer,
  miniCatalog: miniCatalogReducer,
  userData: userDataReducer,
  header: HeaderReducer,
  specialList: specialListReducer,
  filtration: filtrationReducer,
  cardinfo: cardInfoReducer,
  table: tableReducer,
  blog: blogReducer,
  banner: bannerReducer,
  createOrder: createOrderReducer,
  wishlist: wishlistReducer,
  footer: footerReducer
});
