export const TOGGLE_FEATURES = 'TOGGLE_FEATURES';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_CONTACT = 'TOGGLE_CONTACT';
export const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

export const SUBSCRIBE_EMAIL = 'SUBSCRIBE_EMAIL';
export const CLOSE_SUBSCRIBE_MODAL = 'CLOSE_SUBSCRIBE_MODAL';

const initialState = {
  featuresOpen: false,
  menuOpen: false,
  contactOpen: false,
  followOpen: false,
  subscribedEmail: '',
  isSubscribeModalOpen: false,
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
    case SUBSCRIBE_EMAIL:
      return {
        ...state,
        subscribedEmail: action.payload,
        isSubscribeModalOpen: true,
      };
    case CLOSE_SUBSCRIBE_MODAL:
      return {
        ...state,
        isSubscribeModalOpen: false,
      };
    default:
      return state;
  }
};