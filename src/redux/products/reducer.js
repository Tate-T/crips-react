// TODO: fetch
import { catalogData } from "../../data/catalog-data";

const SET_PRODUCTS = "products/setProducts";
const SORT_PRODUCTS = "products/sortProducts";

const initialState = {
	products: catalogData,
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};

		case SORT_PRODUCTS:
			return {
				...state,
				products: [...state.products].sort(action.payload),
			};

		default:
			return state;
	}
};
