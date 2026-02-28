import { catalogData } from "../../data/catalog-data";
import { createSlice } from "@reduxjs/toolkit";

const initialItems = catalogData.map((item, index) => ({
  ...item,
  id: item.id || `item-${Date.now()}-${index}`,
}));

const initialState = {
  items: initialItems,
  currentPage: 1,
  perPage: 6,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        state.currentPage = Math.ceil(state.items.length / state.perPage);
      },
      prepare: (item) => {
        return { payload: { ...item, id: Date.now() } };
      },
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      const totalPages = Math.ceil(state.items.length / state.perPage);
      if (state.currentPage > totalPages && state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    nextPage: (state) => {
      const totalPages = Math.ceil(state.items.length / state.perPage);
      if (state.currentPage < totalPages) {
        state.currentPage += 1;
      }
    },
    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
});

export const { addItem, removeItem, setCurrentPage, nextPage, prevPage } =
  wishlistSlice.actions;

export const wishlistReducer = wishlistSlice.reducer;
