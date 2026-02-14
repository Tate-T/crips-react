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

export const createOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "step/next":
      return {
        ...state,
        step: state.step + 1,
      };

    case "step/prev":
      return {
        ...state,
        step: state.step - 1,
      };

    case "modal/open":
      return {
        ...state,
        modalIsOpened: true,
      };

    case "modal/close":
      return {
        ...state,
        modalIsOpened: false,
      };

    case "summary/toggle":
      return {
        ...state,
        orderSummaryIsOpened: !state.orderSummaryIsOpened,
      };

    case "shippingFormDetails/set":
      return {
        ...state,
        shippingFormDetails: action.payload,
      };

    case "shippingInfo/set":
      return {
        ...state,
        shippingInfo: action.payload,
      };

    case "paymentDetails/set":
      return {
        ...state,
        paymentDetails: action.payload,
      };

    default:
      return state;
  }
};
