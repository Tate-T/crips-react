import { BANNER_PHRASES } from "../../data/banner-phrases"; 
import { SET_BANNER_DATA } from "./actions";

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

const initialState = getInitialState();

export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BANNER_DATA:
      return { ...state, indices: action.payload };
    default:
      return state;
  }
};
