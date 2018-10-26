/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import firebase from './components/firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap RRRerstyttts on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    // currentTime: { hours: '11', minutes: '30', seconds: '1' },
    currentTime: new Date().setMilliseconds(0),
    // eventList: [{ id: '34uy3hjk34h15', event: 'Mikeys event', date: '10/16/18 17:30' }],
    eventList: [],
    event: '',
    date: '',
    user: null,
  }

  componentDidMount = () => {
    // console.log('Got here')
    const eventRef = firebase.database().ref(`users/2QfgNSNHwGQi1W53lYORVmn65l53/todoList`);
    // console.log('Got here')
    eventRef.on('value', (snapshot) => {
      const newState = [];
      if (snapshot.exists()) {
        const items = snapshot.val();
        Object.entries(items).forEach(([key, val]) => {
          newState.push({
            id: key,
            event: val.event,
            date: val.date,
          });
          console.log('Something', key)
        });
        // TODO Probably use a library to sort the data?
        // console.log('Sorting...', newState);
        // newState.sort((a, b) => a.date.localeCompare(b.date));
        // console.log('Sorted...', newState);
      }
      this.setState({
        eventList: newState,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
