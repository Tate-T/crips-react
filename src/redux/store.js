import { createStore } from "redux";
import { rootReducer } from "./reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

store.subscribe(() => {
  const { cart } = store.getState();
  localStorage.setItem('cartProducts', JSON.stringify(cart.items));
});