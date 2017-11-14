import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 700,
    backgroundColor: 'grey'
  },
  inputContainer: {
    height: 200,
    backgroundColor: 'red',
    justifyContent: 'flex-end'
  },
  keypadContainer: {
    height: 500,
    backgroundColor: 'blue'
  },
  valueStyle: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 35,
  },
  buttonRow: {
    flex: 4,
    flexDirection: 'row'
  }
});
