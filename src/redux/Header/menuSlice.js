import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuState: false,
  },
  reducers: {
    changeMenuState: (state, action) => {
      state.menuState = action.payload;
    }
  },
});

export const { changeMenuState } = menuSlice.actions;
export const headerReducer = menuSlice.reducer;
