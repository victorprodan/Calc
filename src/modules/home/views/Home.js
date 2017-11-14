import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { keyPress } from './actions/HomeActions';
import styles from './styles/HomeStyles';

import { createdStore as store } from '../../../Application';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 0
    };
  }

  onKeyPress(pressed) {
    store.dispatch(keyPress(pressed))
  }

  onPressRender(pressed) {
    console.log(keyPress(pressed))
    store.dispatch(keyPress(pressed));
  }

  render() {
    console.log('render called');
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTextStyle}>
            {this.state.currentValue}
          </Text>
        </View>
        <View style={styles.keypadContainer}>
          <View style={styles.renderButtons}>
            <Button
              title='1'
              containerViewStyle={styles.buttonStyle}
              onPress={() => action('PRESS_RENDER')}
            />
            <Button
              title='2'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress(2)}
            />
            <Button
              title='3'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress(3)}
            />
            <Button
              title='+'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress('+')}
            />
            <Button
              title='4'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress(4)}
            />
            <Button
              title='5'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress(5)}
            />
            <Button
              title='6'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress(6)}
            />
            <Button
              title='-'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress('-')}
            />
            <Button
              title='7'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress(7)}
            />
            <Button
              title='8'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress(8)}
            />
            <Button
              title='9'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress(9)}
            />
            <Button
              title='*'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress('*')}
            />
            <Button
              title='CLEAR'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress('CLEAR')}
            />
            <Button
              title='0'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress(0)}
            />
            <Button
              title='='
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress('=')}
            />
            <Button
              title='/'
              containerViewStyle={styles.buttonStyle}
              onPress={() => this.onKeyPress('/')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
