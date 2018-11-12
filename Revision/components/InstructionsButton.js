import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "../styles/style";

const InstructionsButton = ({ handleToggleInstructions }) => (
  <TouchableHighlight
    style={styles.redButton}
    underlayColor={"#ff0066"}
    onPress={handleToggleInstructions}
  >
    <Text style={styles.myText}>Instructions</Text>
  </TouchableHighlight>
);

export default InstructionsButton;
