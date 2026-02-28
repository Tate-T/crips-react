import { createSlice } from "@reduxjs/toolkit";

const defaultCart = [
  {
    img: "https://i.postimg.cc/YqS20htm/catalog-Image1.jpg",
    category: "trending",
    name: "Angels malu zip jeans slim black used",
    price: 139,
    colors: ["#88ABCB", "#FACBCE", "#A75E5D"],
    id: "1",
    discount: 20,
    size: "w26",
    brand: "cece",
    quantity: 1,
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: defaultCart,
  },
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item && (item.quantity || 1) > 1) {
        item.quantity -= 1;
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((p) => p.id === action.payload);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },

    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const {incrementQuantity, decrementQuantity, removeItem, clearCart} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const getCartItems = (state) => state.cart.items;