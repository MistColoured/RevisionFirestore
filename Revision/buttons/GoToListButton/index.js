import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "./styles";

const GoToListButton = ({ handleToggleMenu }) => (
  <TouchableHighlight
    style={styles.button}
    underlayColor={"#ff0066"}
    onPress={handleToggleMenu}
  >
    <Text style={styles.text}>Back to list</Text>
  </TouchableHighlight>
);

export default GoToListButton;
