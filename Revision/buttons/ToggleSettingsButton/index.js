import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "./styles";

const ToggleSettingsButton = ({ handleToggleSettings }) => (
  <TouchableHighlight
    style={styles.button}
    underlayColor={"#ff0066"}
    onPress={handleToggleSettings}
  >
    <Text style={styles.text}>Settings</Text>
  </TouchableHighlight>
);

export default ToggleSettingsButton;
