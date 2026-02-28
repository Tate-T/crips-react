import { createSlice } from "@reduxjs/toolkit";
import { BANNER_PHRASES } from "../data/banner-phrases";

const getTodayStr = () => {
  const d = new Date();
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
};

const getInitialState = () => {
  const saved = JSON.parse(localStorage.getItem("catalogBannerChoose"));
  const today = getTodayStr();

  if (saved && saved[0] === today) {
    return { indices: saved[1], date: today };
  }

  const newIndices = {
    title: Math.floor(Math.random() * BANNER_PHRASES.title.length),
    long: Math.floor(Math.random() * BANNER_PHRASES.long.length),
    short: Math.floor(Math.random() * BANNER_PHRASES.short.length),
  };

  localStorage.setItem(
    "catalogBannerChoose",
    JSON.stringify([today, newIndices]),
  );

  return { indices: newIndices, date: today };
};

const bannerSlice = createSlice({
  name: "banner",
  initialState: getInitialState(),
  reducers: {
    setBannerData: (state, action) => {
      state.indices = action.payload;
    },
  },
});

export const { setBannerData } = bannerSlice.actions;
export const bannerReducer = bannerSlice.reducer;
