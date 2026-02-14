import {
  TOGGLE_FEATURES,
  TOGGLE_MENU,
  TOGGLE_CONTACT,
  TOGGLE_FOLLOW,
} from './types';

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
