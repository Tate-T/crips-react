import { createSelector } from "reselect";

export const selectCreateOrder = (state) => state.createOrder;

export const selectStep = (state) => state.createOrder.step;
export const selectModalIsOpened = (state) => state.createOrder.modalIsOpened;
export const selectOrderSummaryIsOpened = (state) => state.createOrder.orderSummaryIsOpened;

export const selectShippingFormDetails = (state) => state.createOrder.shippingFormDetails;
export const selectShippingInfo = (state) => state.createOrder.shippingInfo;
export const selectPaymentDetails = (state) => state.createOrder.paymentDetails;

export const selectFormattedAddress = createSelector([selectShippingInfo], (info) => {
  const { firstName, lastName, streetAddress, country, stateProvince, zip } = info;

  return `${firstName} ${lastName}, ${streetAddress.filter(Boolean).join(", ")}, ${stateProvince}, ${country}, ${zip}`;
});
