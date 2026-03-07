import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
  name: "style",
  initialState: {
    theme: "dark",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = styleSlice.actions;
export const styleReducer = styleSlice.reducer;
