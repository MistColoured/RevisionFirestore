import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "./styles";

const ToggleMenuButton = ({ handleToggleMenu }) => (
  <TouchableHighlight
    style={styles.button}
    underlayColor={"#ff0066"}
    onPress={handleToggleMenu}
  >
    <Text style={styles.text}>Menu!</Text>
  </TouchableHighlight>
);

export default ToggleMenuButton;
