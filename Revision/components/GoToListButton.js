import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "../styles/style";

const GoToListButton = ({ handleToggleMenu }) => (
  <TouchableHighlight
    style={styles.redButton}
    underlayColor={"#ff0066"}
    onPress={handleToggleMenu}
  >
    <Text style={styles.myText}>Back to list</Text>
  </TouchableHighlight>
);

export default GoToListButton;
