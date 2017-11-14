import { createReducer } from 'reduxsauce';
import Types from './actionTypes';

export const INITIAL_STATE = {
  currentValue: 0,
  operand: '+' || '-' || '*' || '/' || '=' || 'CLEAR',
  lastValue: 0,
  result: 0
};

export const renderValue = (state = INITIAL_STATE, action) => {
  return { ...state, currentValue: 9999 };
};

export const HANDLERS = {
  [Types.RENDER_VALUE]: renderValue
};

export default createReducer(INITIAL_STATE, HANDLERS);
