import React, { Component } from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";

import styles from "./style";

const Settings = ({ handleToggleSettings }) => (
  <TouchableHighlight
    style={styles.instructionsButton}
    underlayColor={"#ffee00"}
    onPress={handleToggleSettings}
  >
    <View style={styles.instructionsPage}>
      <Text style={styles.myYellowText}>Instructions</Text>
      <Text style={styles.myText}>Look at all these settings</Text>
      <Text style={styles.myText}>And options</Text>
      <Text> </Text>
      <Text style={styles.myText}>Aren't they fab</Text>
      <Text style={styles.myText}>Just so many to choose from</Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.myYellowText}>Touch anywhere on this</Text>
      <Text style={styles.myYellowText}>screen to return</Text>
    </View>
  </TouchableHighlight>
);

export default Settings;
