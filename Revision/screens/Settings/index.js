import React, { Component } from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";

import styles from "./styles";

const Settings = ({ handleToggleSettings }) => (
  <TouchableHighlight underlayColor={"#ffee00"} onPress={handleToggleSettings}>
    <View style={styles.settings}>
      <Text style={styles.yellowText}>Settings</Text>
      <Text style={styles.text}>Look at all these settings</Text>
      <Text style={styles.text}>And options</Text>
      <Text> </Text>
      <Text style={styles.text}>Aren't they fab</Text>
      <Text style={styles.text}>Just so many to choose from</Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.yellowText}>Touch anywhere on this</Text>
      <Text style={styles.yellowText}>screen to return</Text>
    </View>
  </TouchableHighlight>
);

export default Settings;
