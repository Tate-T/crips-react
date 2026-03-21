// import { createStore } from "redux";
// import { rootReducer } from "./reducer";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import productReducer from "./products/productSlice"

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

export const store = configureStore({
	reducer: rootReducer
});
