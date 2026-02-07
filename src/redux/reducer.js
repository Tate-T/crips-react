import { combineReducers } from "redux";

import { productsReducer } from "./products/reducer";
import { miniCatalogReducer } from "./MiniCatalog/reducer";

export const rootReducer = combineReducers({ products: productsReducer, miniCatalog: miniCatalogReducer });
