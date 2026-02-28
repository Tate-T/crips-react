import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentPage: 1
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		nextPage(state) {
			state.currentPage++;
		}
	}
});

export const { nextPage } = counterSlice.actions;
export const miniCatalogReducer = counterSlice.reducer;
