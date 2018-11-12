import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "../styles/style";

const UpOneLevelButton = ({ handleUpOneLevelButton }) => (
  <TouchableHighlight
    style={styles.redButton}
    underlayColor={"#ff0055"}
    onPress={handleUpOneLevelButton}
  >
    <Text style={styles.myText}>Up One Level</Text>
  </TouchableHighlight>
);

export default UpOneLevelButton;
