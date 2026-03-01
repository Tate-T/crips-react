import { combineReducers } from "redux";
import { headerReducer } from "./Header/menuSlice.js";
import { specialListReducer } from "./specialList/specialListSlice.js";
import { filtrationReducer } from "./filtration/reducer";
// import { cardInfoReducer } from "./cardInfo/reducer";
import { tableReducer } from "./table/reducer";
import { blogReducer } from "./blog/reducer";
import { bannerReducer } from "./bannerSlice";
import { createOrderReducer } from "./createOrder/createOrderSlice.js";
import { footerReducer } from "./footer/reducer";
import { wishlistReducer } from "./Wishlist/wishlistSlice.js";
import { miniCatalogReducer } from "./MiniCatalog/miniCatalogSlice.js";
import { cartReducer } from "./cart/cartSlice.js";
import { productsReducer } from "./products/productSlice";
import { userDataReducer } from "./userData/useDataSlice";

export const rootReducer = combineReducers({
  products: productsReducer,
  miniCatalog: miniCatalogReducer,
  userData: userDataReducer,
  header: headerReducer,
  specialList: specialListReducer,
  filtration: filtrationReducer.reducer,
  // cardinfo: cardInfoReducer,
  cart: cartReducer,
  table: tableReducer,
  blog: blogReducer,
  banner: bannerReducer,
  createOrder: createOrderReducer,
  wishlist: wishlistReducer,
  footer: footerReducer,
});
