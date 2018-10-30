/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  View,
  YellowBox,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import _ from "lodash";
import Icon from "react-native-vector-icons/FontAwesome";
import firebase, { auth, provider } from "./components/firebase";
import TodoList from "./components/TodoList";

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
    // console.log("Delete a todo", id);
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
    const { todoList, embedLevel, loading } = this.state;
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
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.2)",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
                backgroundColor: "#19f",
                borderRadius: 100,
                position: "absolute",
                bottom: 10,
                right: 10
              }}
              onPress={this.handleAddTodo}
            >
              <Icon name={"plus"} size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
