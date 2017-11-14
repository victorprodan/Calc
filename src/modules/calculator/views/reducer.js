import { KEY_PRESS } from './actions/types';

const INITIAL_STATE = {
  currentValue: 0,
  operand: '+' || '-' || '*' || '/' || '=' || 'CLEAR',
  lastValue: 0,
  result: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case KEY_PRESS:
      if (typeof (pressed) === 'number') {
        const midValue = state.currentValue * 10;
        const nextValue = midValue + action.payload;
        return { ...state, currentValue: nextValue };
      } else if (typeof (pressed) === 'string') {
        const { currentValue, lastValue, operand } = INITIAL_STATE;
        if (operand) {
          const midValue = eval(lastValue + operand + currentValue);
        }
          switch (action.payload) {
            case '+':
            case '-':
            case '*':
            case '/':
              return {
                ...state,
                operand: action.payload,
                lastValue: currentValue,
                currentValue: 0
              };
            case 'CLEAR':
              return {
                ...state,
                operand: null,
                lastValue: 0,
                currentValue: 0
              };
            case '=':
              return {
                ...state,
                operand: null,
                lastValue: 0,
                result: currentValue
              };
            default:
              return state;
          }
      }
      return { ...state, pressed: action.payload };
    default:
      return state;
  }
};
