import { combineReducers } from 'redux';
import reducer from './modules/home/views/reducer';

export default combineReducers({
  process: reducer
});
