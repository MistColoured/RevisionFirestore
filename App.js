/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, YellowBox, ActivityIndicator, TextInput } from "react-native";
import _ from "lodash";
import firebase, { auth, provider } from "./components/firebase";
import TodoList from "./components/TodoList";
import AddTodoButton from "./components/AddTodoButton";
import styles from "./components/style";

YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

export default class App extends Component {
  state = {
    todoList: [],
    loading: false,
    text: "",
    // user: null,
    user: { uid: "2QfgNSNHwGQi1W53lYORVmn65l53" },
    error: null,
    embedLevel: "",
    activeRowKey: ""
  };

  componentDidMount = () => {
    this.listenForItems();
  };

  listenForItems = () => {
    const { user, embedLevel } = this.state;
    const todoRef = firebase
      .database()
      .ref(`users/${user.uid}/todoList/${embedLevel}`);

    this.setState({ loading: true });
    todoRef.on("value", snapshot => {
      const newState = [];
      if (snapshot.exists()) {
        const items = snapshot.val();
        Object.entries(items).forEach(([key, val]) => {
          newState.push({
            todo: val.todo,
            _key: key
          });
        });
      }
      this.setState({
        todoList: newState,
        loading: false
      });
    });
  };

  handleAddTodo = () => {
    console.log("Add a todo");
  };

  handleDeleteTodo = id => {
    const {
      user: { uid },
      embedLevel
    } = this.state;
    const deleteRef = firebase
      .database()
      .ref(`users/${uid}/todoList/${embedLevel}/${id}`);
    deleteRef.remove();
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#fff"
          // marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };
  renderLoading = () => {
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  handleClickTodo = _key => {
    const { embedLevel } = this.state;
    this.setState(
      {
        embedLevel: embedLevel.concat("/", _key)
      },
      () => this.listenForItems()
    );
  };

  handleUpOneLevel = () => {
    const { embedLevel } = this.state;
    if (embedLevel === "") {
      return;
    }
    const re = /.*(?=\/)/;
    this.setState(
      {
        embedLevel: embedLevel.match(re)[0]
      },
      () => this.listenForItems()
    );
  };

  render() {
    const { todoList, embedLevel, loading, text } = this.state;
    return (
      <View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View
            style={{
              minHeight: "100%"
            }}
          >
            <TodoList
              todoList={todoList}
              handleUpOneLevelButton={this.handleUpOneLevel}
              handleClickTodo={this.handleClickTodo}
              handleDeleteTodo={this.handleDeleteTodo}
              embedLevel={embedLevel}
            />
            <AddTodoButton handleAddTodo={this.handleAddTodo} />
            {/* <TextInput
              maxLength={10}
              style={styles.todoInput}
              placeholder={"I am placeholder text"}
              onChangeText={text => this.setState({ text })}
              value={text}
            /> */}
          </View>
        )}
      </View>
    );
  }
}
