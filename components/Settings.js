import React, { Component } from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";

import styles from "./style";

const Settings = ({ handleToggleSettings }) => (
  <TouchableHighlight
    style={styles.instructionsButton}
    underlayColor={"#ffee00"}
    onPress={handleToggleSettings}
  >
    <View>
      <Text>Settings</Text>
      <Text>Adjust them!</Text>
    </View>
  </TouchableHighlight>
);

export default Settings;
