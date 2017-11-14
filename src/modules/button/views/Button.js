import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles/ButtonStyles';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  };

  render() {
    const { text, onPress } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
          <Text style={styles.symbolContainer}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
