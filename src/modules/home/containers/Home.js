import { connect } from 'react-redux';
import Home from '../views/Home';
import { keyPress } from '../views/reducer';

export default connect(
  state => ({
    operand: state.process.operand,
    lastValue: state.process.lastValue,
    currentValue: state.process.currentValue
  }),
  {
    onKeyPress: keyPress
  }
)(Home);
