import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { keyPress } from './actions/CalculatorActions';
import Button from '../../button/views/Button';
import styles from './styles/CalculatorStyles';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 0
    };
  }

  onKeyPress(pressed) {
    keyPress(pressed);
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.valueStyle}>
            {this.state.currentValue}
          </Text>
        </View>
        <View style={styles.keypadContainer}>
          <View style={styles.buttonRow}>
            <Button text={'1'} onPress={this.onKeyPress.bind(this, 1)} />
            <Button text={'2'} onPress={this.onKeyPress.bind(this, 2)} />
            <Button text={'3'} onPress={this.onKeyPress.bind(this, 3)} />
            <Button text={'+'} onPress={this.onKeyPress.bind(this, '+')} />
          </View>
          <View style={styles.buttonRow}>
            <Button text={'4'} onPress={this.onKeyPress.bind(this, 4)} />
            <Button text={'5'} onPress={this.onKeyPress.bind(this, 5)} />
            <Button text={'6'} onPress={this.onKeyPress.bind(this, 6)} />
            <Button text={'-'} onPress={this.onKeyPress.bind(this, '-')} />
          </View>
          <View style={styles.buttonRow}>
            <Button text={'7'} onPress={this.onKeyPress.bind(this, 7)} />
            <Button text={'8'} onPress={this.onKeyPress.bind(this, 8)} />
            <Button text={'9'} onPress={this.onKeyPress.bind(this, 9)} />
            <Button text={'*'} onPress={this.onKeyPress.bind(this, '*')} />
          </View>
          <View style={styles.buttonRow}>
            <Button text={'CLEAR'} onPress={this.onKeyPress.bind(this, 'CLEAR')} />
            <Button text={'0'} onPress={this.onKeyPress.bind(this, 0)} />
            <Button text={'='} onPress={this.onKeyPress.bind(this, '=')} />
            <Button text={'/'} onPress={this.onKeyPress.bind(this, '/')} />
          </View>
        </View>
      </View>
    );
  }
}

export default Calculator;
