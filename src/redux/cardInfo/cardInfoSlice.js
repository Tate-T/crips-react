/*const initialState = {
  products: [],
  selectedColor: null,
  selectedSize: null,
  quantity: 1,
};


export const cardInfoReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "setProducts":
      return {
        ...state,
        products: action.payload,
      };

    case "selectColor":
      return {
        ...state,
        selectedColor: action.payload,
      };

    case "selectSize":
      return {
        ...state,
        selectedSize: action.payload,
      };

    case "increaseQuantity":
      return {
        ...state,
        quantity: state.quantity + 1,
      };

    case "decreaseQuantity":
      return {
        ...state,
        quantity: state.quantity > 1 ? state.quantity - 1 : 1,
      };

    default:
      return state;
  }
};
*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedColor: null,
  selectedSize: null,
  quantity: 1,
};

const cardInfoSlice = createSlice({
  name: "cardInfo",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },

    selectColor(state, action) {
      state.selectedColor = action.payload;
    },

    selectSize(state, action) {
      state.selectedSize = action.payload;
    },

    increaseQuantity(state) {
      state.quantity++;
    },

    decreaseQuantity(state) {
      if (state.quantity > 1) {
        state.quantity--;
      }
    },
  },
});

export const {
  setProducts,
  selectColor,
  selectSize,
  increaseQuantity,
  decreaseQuantity,
} = cardInfoSlice.actions;
export const cardInfoReducer = cardInfoSlice.reducer;


