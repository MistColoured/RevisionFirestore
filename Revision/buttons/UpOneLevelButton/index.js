import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "./styles";

const UpOneLevelButton = ({ handleUpOneLevelButton }) => (
  <TouchableHighlight
    style={styles.button}
    underlayColor={"#ff0055"}
    onPress={handleUpOneLevelButton}
  >
    <Text style={styles.text}>Up One Level</Text>
  </TouchableHighlight>
);

export default UpOneLevelButton;
