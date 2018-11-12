import React, { Component } from "react";
import { Text, TouchableHighlight, TextInput } from "react-native";

import styles from "../styles/style";

export default class RevisionInputButton extends Component {
  state = {
    addRevisionText: ""
  };
  render() {
    const { handleAddRevision } = this.props;
    const { addRevisionText } = this.state;
    return (
      <TouchableHighlight
        style={styles.addRevisionButton}
        underlayColor={"#ffee00"}
      >
        <TextInput
          maxLength={32}
          autoFocus={true}
          style={styles.revisionInput}
          placeholder={"I am placeholder text"}
          onBlur={() => handleAddRevision(addRevisionText)}
          onChangeText={addRevisionText => this.setState({ addRevisionText })}
          value={addRevisionText}
        />
      </TouchableHighlight>
    );
  }
}
