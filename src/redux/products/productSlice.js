import { createSlice } from "@reduxjs/toolkit";

import { fetchProducts } from "./operations";

const productSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		isLoading: false,
		error: null
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})

			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})

			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			});
	}
});

export const productsReducer = productSlice.reducer;
