import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  shippingInfo: {
    firstName: "",
    lastName: "",
    company: "",
    streetAddress: ["", "", ""],
    country: "",
    stateProvince: "",
    shippingMethod: "fixed",
    zip: "",
  },

  shippingFormDetails: {
    email: "",
    password: "",
  },

  paymentDetails: {
    isSameAddress: false,
    discountCode: "",
  },

  step: 1,
  modalIsOpened: false,
  orderSummaryIsOpened: false,
};

const createOrderSlice = createSlice({
  name: "createOrder",
  initialState,
  reducers: {
    goToNextStep(state) {
      state.step += 1;
    },
    goToPrevStep(state) {
      state.step -= 1;
    },
    openModal(state) {
      state.modalIsOpened = true;
    },
    closeModal(state) {
      state.modalIsOpened = false;
    },
    toggleOrderSummary(state) {
      state.orderSummaryIsOpened = !state.orderSummaryIsOpened;
    },
    setShippingFormDetails(state, action) {
      state.shippingFormDetails = action.payload;
    },
    setShippingInfo(state, action) {
      state.shippingInfo = action.payload;
    },
    setPaymentDetails(state, action) {
      state.paymentDetails = action.payload;
    },
  },
});

export const { goToNextStep, goToPrevStep, openModal, closeModal, toggleOrderSummary, setShippingFormDetails, setShippingInfo, setPaymentDetails } = createOrderSlice.actions;
export const createOrderReducer = createOrderSlice.reducer;
