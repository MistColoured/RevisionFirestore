import React, { Component } from "react";
import { Text, TouchableHighlight, TextInput } from "react-native";

import styles from "./style";

export default class TodoInputButton extends Component {
  state = {
    addTodoText: ""
  };
  render() {
    const { handleAddTodo } = this.props;
    const { addTodoText } = this.state;
    return (
      <TouchableHighlight
        style={styles.addTodoButton}
        underlayColor={"#ffee00"}
      >
        <TextInput
          maxLength={10}
          autoFocus={true}
          style={styles.todoInput}
          placeholder={"I am placeholder text"}
          onBlur={() => handleAddTodo(addTodoText)}
          onChangeText={addTodoText => this.setState({ addTodoText })}
          value={addTodoText}
        />
      </TouchableHighlight>
    );
  }
}
