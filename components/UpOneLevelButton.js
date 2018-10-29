import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "./style";

const UpOneLevelButton = ({ handleUpOneLevel }) => (
  <TouchableHighlight
    style={styles.redButton}
    underlayColor={"#ff0066"}
    onPress={handleUpOneLevel}
  >
    <Text style={styles.myText}>Up One Level</Text>
  </TouchableHighlight>
);

export default UpOneLevelButton;
