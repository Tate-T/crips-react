import {
  TOGGLE_FEATURES,
  TOGGLE_MENU,
  TOGGLE_CONTACT,
  TOGGLE_FOLLOW,
  SUBSCRIBE_EMAIL,
  CLOSE_SUBSCRIBE_MODAL,
} from './reducer';

export const toggleFeatures = () => ({
  type: TOGGLE_FEATURES,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const toggleContact = () => ({
  type: TOGGLE_CONTACT,
});

export const toggleFollow = () => ({
  type: TOGGLE_FOLLOW,
});

export const subscribeEmail = (email) => ({
  type: SUBSCRIBE_EMAIL,
  payload: email,
});

export const closeSubscribeModal = () => ({
  type: CLOSE_SUBSCRIBE_MODAL,
});
