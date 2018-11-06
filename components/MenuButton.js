import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "./style";

const MenuButton = ({ handleToggleMenu }) => (
  <TouchableHighlight
    style={styles.redButton}
    underlayColor={"#ff0066"}
    onPress={handleToggleMenu}
  >
    <Text style={styles.myText}>Menu!</Text>
  </TouchableHighlight>
);

export default MenuButton;
