import React from "react";
import { Text, TouchableHighlight, TextInput } from "react-native";

import styles from "./style";

const TodoInputButton = ({ handleAddTodo }) => (
  <TouchableHighlight
    style={styles.addTodoButton}
    underlayColor={"#ffee00"}
    // onPress={handleUpOneLevelButton}
  >
    <TextInput
      maxLength={10}
      autoFocus={true}
      style={styles.todoInput}
      placeholder={"I am placeholder text"}
      onBlur={() => console.log("Blurred")}
      onSubmitEditing={handleAddTodo}
      // onChangeText={text => this.setState({ text })}
      // value={text}
    />
  </TouchableHighlight>
);

export default TodoInputButton;
