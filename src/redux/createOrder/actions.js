export const goToNextStep = () => ({
  type: "step/next",
});

export const goToPrevStep = () => ({
  type: "step/prev",
});

export const openModal = () => ({
  type: "modal/open",
});

export const closeModal = () => ({
  type: "modal/close",
});

export const toggleOrderSummary = () => ({
  type: "summary/toggle",
});

export const setShippingFormDetails = (data) => ({
  type: "shippingFormDetails/set",
  payload: data,
});

export const setShippingInfo = (data) => ({
  type: "shippingInfo/set",
  payload: data,
});

export const setPaymentDetails = (data) => ({
  type: "paymentDetails/set",
  payload: data,
});
