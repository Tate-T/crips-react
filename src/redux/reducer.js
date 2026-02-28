import { combineReducers } from "redux";
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
import { cartReducer } from "./cart/reducer";
import { miniCatalogReducer } from "./MiniCatalog/reducer";
import { productsReducer } from "./products/productSlice"
import { userDataReducer } from "./userData/useDataSlice";

export const rootReducer = combineReducers({
  products: productsReducer,
  miniCatalog: miniCatalogReducer,
  userData: userDataReducer,
  header: HeaderReducer,
  specialList: specialListReducer,
  filtration: filtrationReducer,
  cardinfo: cardInfoReducer,
  cart: cartReducer,
  table: tableReducer,
  blog: blogReducer,
  banner: bannerReducer,
  createOrder: createOrderReducer,
  wishlist: wishlistReducer,
  footer: footerReducer,
});
