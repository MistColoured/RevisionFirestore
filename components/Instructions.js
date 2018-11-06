import React, { Component } from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";

import styles from "./style";

const Instructions = ({ handleToggleInstructions }) => (
  <TouchableHighlight
    style={styles.instructionsButton}
    underlayColor={"#ffee00"}
    onPress={handleToggleInstructions}
  >
    <View>
      <Text>Instructions</Text>
      <Text>Do something here</Text>
    </View>
  </TouchableHighlight>
);

export default Instructions;
