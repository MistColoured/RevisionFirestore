import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "./style";

const UpOneLevelButton = ({ handleUpOneLevelButton }) => (
  <TouchableHighlight
    style={styles.redButton}
    underlayColor={"#ff0066"}
    onPress={handleUpOneLevelButton}
  >
    <Text style={styles.myText}>Up One Level</Text>
  </TouchableHighlight>
);

export default UpOneLevelButton;
