const initialState = {
  menuState: false,
}

export const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "menu/changeMenuState":
      return { ...state, menuState: action.payload };
    default:
      return state;
  }
};
