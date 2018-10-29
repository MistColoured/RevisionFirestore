/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableHighlight, YellowBox } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import _ from 'lodash'

import firebase, { auth, provider } from './components/firebase';
import Todo from './components/Todo'
import styles from './components/style';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class App extends Component {
  state = {
    todoList: [],
    todo: '',
    loading: false,
    // user: null,
    user: { uid: '2QfgNSNHwGQi1W53lYORVmn65l53' },
    error: null,
    refreshing: false,
    embedLevel: '',
  }

  componentDidMount = () => {
    this.listenForItems()
  }

  listenForItems = () => {
    const { user, embedLevel } = this.state
    const todoRef = firebase.database().ref(`users/${user.uid}/todoList/${embedLevel}`);

    this.setState({ loading: true })
    todoRef.on('value', (snapshot) => {
      const newState = [];
      if (snapshot.exists()) {
        const items = snapshot.val();
        Object.entries(items).forEach(([key, val]) => {
          newState.push({
            todo: val.todo,
            _key: key,
          });
          console.log('Something', key)
        });
      }
      console.log('newState', newState)
      this.setState({
        todoList: newState,
        loading: false,
      });
    });
  }
  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        const { uid } = this.state.user
        const eventRef = firebase.database().ref(`users/${uid}/todoList`);
        this.listenForItems(eventRef)
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#CED0CE",
          // marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#ee1173"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  onPress = (_key) => {
    const { embedLevel } = this.state;
    this.setState({
      embedLevel: embedLevel.concat('/', _key),
    },
      () => this.listenForItems());
    console.log('Button pressed', _key)
  }
  render() {
    const { todoList } = this.state;
    return (
      <View>
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={styles.button}
              onPress={() => { this.onPress(item._key) }}
            >
              <Text
                style={styles.myText}>
                {item.todo}
              </Text>
            </TouchableHighlight>
          )}
          keyExtractor={item => item._key}
          ItemSeparatorComponent={this.renderSeparator}
          // ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          // onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }
}


