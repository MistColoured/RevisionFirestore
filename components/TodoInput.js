import React from "react";
import { TextInput } from "react-native";
import styles from "./style";

const TodoInput = () => (
  <TextInput
    maxLength={10}
    style={styles.todoInput}
    placeholder={"I am placeholder text"}
    // onChangeText={text => this.setState({ text })}
    // value={text}
  />
);

export default TodoInput;
