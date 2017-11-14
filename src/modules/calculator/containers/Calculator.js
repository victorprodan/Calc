import { connect } from 'react-redux';
import Calculator from '../views/Calculator';

export default connect(
  state => ({
    operand: state.operand,
    lastValue: state.lastValue,
    currentValue: state.currentValue
  })
)(Calculator);
