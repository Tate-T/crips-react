const initialState = {
  products: [],
  selectedColor: null,
  selectedSize: null,
  quantity: 1,
};


export const cardInfoReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "setProducts":
      return {
        ...state,
        products: action.payload,
      };

    case "selectColor":
      return {
        ...state,
        selectedColor: action.payload,
      };

    case "selectSize":
      return {
        ...state,
        selectedSize: action.payload,
      };

    case "increaseQuantity":
      return {
        ...state,
        quantity: state.quantity + 1,
      };

    case "decreaseQuantity":
      return {
        ...state,
        quantity: state.quantity > 1 ? state.quantity - 1 : 1,
      };

    default:
      return state;
  }
};
