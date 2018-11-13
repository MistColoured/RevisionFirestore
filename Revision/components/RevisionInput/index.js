import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

const RevisionInput = () => (
  <TextInput
    maxLength={10}
    style={styles.revisionInput}
    placeholder={"I am placeholder text"}
    // onChangeText={text => this.setState({ text })}
    // value={text}
  />
);

export default RevisionInput;
