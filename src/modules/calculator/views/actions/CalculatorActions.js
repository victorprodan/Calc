import { KEY_PRESS } from './types';

export const keyPress = (pressed) => {
  return {
    type: KEY_PRESS,
    payload: pressed
  };
};
