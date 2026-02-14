import {
  TOGGLE_FEATURES,
  TOGGLE_MENU,
  TOGGLE_CONTACT,
  TOGGLE_FOLLOW,
} from './types';

const initialState = {
  featuresOpen: false,
  menuOpen: false,
  contactOpen: false,
  followOpen: false,
};

export const footerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FEATURES:
      return {
        ...state,
        featuresOpen: !state.featuresOpen,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    case TOGGLE_CONTACT:
      return {
        ...state,
        contactOpen: !state.contactOpen,
      };
    case TOGGLE_FOLLOW:
      return {
        ...state,
        followOpen: !state.followOpen,
      };
    default:
      return state;
  }
};