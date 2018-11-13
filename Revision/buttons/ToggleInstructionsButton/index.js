import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "./styles";

const ToggleInstructionsButton = ({ handleToggleInstructions }) => (
  <TouchableHighlight
    style={styles.button}
    underlayColor={"#ff0066"}
    onPress={handleToggleInstructions}
  >
    <Text style={styles.text}>Instructions</Text>
  </TouchableHighlight>
);

export default ToggleInstructionsButton;
