import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  inputContainer: {
    backgroundColor: '#fff',
    flex: 3,
    justifyContent: 'flex-end'
  },
  keypadContainer: {
    backgroundColor: '#fff',
    flex: 7
  },
  renderButtons: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'yellow'
  },
  buttonStyle: {
    minWidth: '25%',
    marginLeft: 0,
    marginRight: 0
  },
  inputTextStyle: {
    color: '#000',
    textAlign: 'right',
    fontSize: 35,
  }
});
