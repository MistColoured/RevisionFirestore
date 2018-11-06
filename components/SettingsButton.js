import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "./style";

const SettingsButton = ({ handleToggleSettings }) => (
  <TouchableHighlight
    style={styles.redButton}
    underlayColor={"#ff0066"}
    onPress={handleToggleSettings}
  >
    <Text style={styles.myText}>Settings</Text>
  </TouchableHighlight>
);

export default SettingsButton;
