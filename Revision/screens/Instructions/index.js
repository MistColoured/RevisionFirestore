import React, { Component } from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";

import styles from "./styles";

const Instructions = ({ handleToggleInstructions }) => (
  <TouchableHighlight
    underlayColor={"#ffee00"}
    onPress={handleToggleInstructions}
  >
    <View style={styles.instructions}>
      <Text style={styles.yellowText}>Instructions</Text>
      <Text style={styles.text}>Add an item: Click on +</Text>
      <Text> </Text>
      <Text style={styles.yellowText}>Delete an item:</Text>
      <Text style={styles.text}>Swipe left and click 'Delete'</Text>
      <Text> </Text>
      <Text style={styles.yellowText}>Edit an item:</Text>
      <Text style={styles.text}>Long press</Text>
      <Text> </Text>
      <Text style={styles.yellowText}>Add sub-item:</Text>
      <Text style={styles.text}>Short press</Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.yellowText}>Touch anywhere on this</Text>
      <Text style={styles.yellowText}>screen to return</Text>
    </View>
  </TouchableHighlight>
);

export default Instructions;
