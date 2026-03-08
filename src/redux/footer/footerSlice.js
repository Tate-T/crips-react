import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  featuresOpen: false,
  menuOpen: false,
  contactOpen: false,
  followOpen: false,
  subscribedEmail: "",
  isSubscribeModalOpen: false,
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    toggleFeatures: (state) => {
      state.featuresOpen = !state.featuresOpen;
    },
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    toggleContact: (state) => {
      state.contactOpen = !state.contactOpen;
    },
    toggleFollow: (state) => {
      state.followOpen = !state.followOpen;
    },
    subscribeEmail: (state, action) => {
      state.subscribedEmail = action.payload;
      state.isSubscribeModalOpen = true;
    },
    closeSubscribeModal: (state) => {
      state.isSubscribeModalOpen = false;
    },
  },
});

export const {
  toggleFeatures,
  toggleMenu,
  toggleContact,
  toggleFollow,
  subscribeEmail,
  closeSubscribeModal,
} = footerSlice.actions;

export const footerReducer = footerSlice.reducer;
