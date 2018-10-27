/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

import firebase, { auth, provider } from './components/firebase';
import Todo from './components/Todo'
import styles from './components/style';

export default class App extends Component {
  state = {
    todoList: [],
    todo: '',
    loading: false,
    // user: null,
    user: { uid: '2QfgNSNHwGQi1W53lYORVmn65l53' },
    error: null,
    refreshing: false,
  }

  componentDidMount = () => {
    const { uid } = this.state.user
    const eventRef = firebase.database().ref(`users/${uid}/todoList`);
    this.listenForItems(eventRef)
  }

  listenForItems = (itemsRef) => {
    this.setState({ loading: true })
    itemsRef.on('value', (snapshot) => {
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
          height: 10,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
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

  render() {
    const { todoList } = this.state;
    return (
      <List containerStyle={{ borderTopWidth: 12, borderBottomWidth: 12 }}>
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              // title={`${item.name.first} ${item.name.last}`}
              title={`${item.todo} ${item.todo}`}
              // subtitle={item.email}
              // avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item._key}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          // onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </List>
    );
  }
}


