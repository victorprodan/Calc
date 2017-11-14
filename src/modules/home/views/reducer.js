import { KEY_PRESS, PRESS_RENDER } from './actions/types';

const INITIAL_STATE = {
  currentValue: 0,
  operand: '+' || '-' || '*' || '/' || '=' || 'CLEAR',
  lastValue: 0,
  result: 0
};

//
// export const keyPress = (pressed) => {
//   return {
//     type: 'KEY_PRESS',
//     payload: pressed
//   };
// };

export default (state = INITIAL_STATE, action) => {
  // console.log(action.type, state.currentValue);
  switch (action.type) {
    case PRESS_RENDER: {
      console.log(this.setState({ currentValue: action.payload }));
    }
    // case KEY_PRESS:
    //   if (typeof (pressed) === 'number') {
    //     const pressed = action.payload;
    //     const midValue = state.currentValue * 10;
    //     const nextValue = midValue + pressed;
    //     return { ...state, currentValue: nextValue };
    //   } else if (typeof (pressed) === 'string') {
    //     const { currentValue, lastValue, operand } = INITIAL_STATE;
    //     if (!operand) {
    //        const midValue = eval(lastValue + operand + currentValue);
    //     }
    //     switch (action.payload) {
    //         case '+':
    //         case '-':
    //         case '*':
    //         case '/':
    //           return {
    //             ...state,
    //             operand: action.payload,
    //             lastValue: currentValue,
    //             currentValue: 0
    //           };
    //         case 'CLEAR':
    //           return {
    //             ...state,
    //             operand: null,
    //             lastValue: 0,
    //             currentValue: 0
    //           };
    //         case '=':
    //           return {
    //             ...state,
    //             operand: null,
    //             lastValue: 0,
    //             result: currentValue
    //           };
    //         default:
    //           return state;
    //       }
    //   }
    //   return { ...state, pressed: action.payload };
    default:
      return state;
  }
};
