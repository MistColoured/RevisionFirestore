import React, { Component } from 'react';
import styles from './style'
import { View, TouchableHighlight, Text } from 'react-native'

class Todo extends Component {
  render() {
    return (
      // <TouchableHighlight onPress={this.props.onPress}>
      <TouchableHighlight>
        <View style={styles.li}>
          {/* <Text style={styles.liText}>{this.props.item.title}</Text> */}
          <Text style={styles.liText}>Bananas!!</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Todo;