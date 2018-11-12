import React, { Component } from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";

import styles from "../styles/style";

const Instructions = ({ handleToggleInstructions }) => (
  <TouchableHighlight
    underlayColor={"#ffee00"}
    onPress={handleToggleInstructions}
  >
    <View style={styles.instructionsPage}>
      <Text style={styles.myYellowText}>Instructions</Text>
      <Text style={styles.myText}>Add an item: Click on +</Text>
      <Text> </Text>
      <Text style={styles.myYellowText}>Delete an item:</Text>
      <Text style={styles.myText}>Swipe left and click 'Delete'</Text>
      <Text> </Text>
      <Text style={styles.myYellowText}>Edit an item:</Text>
      <Text style={styles.myText}>Long press</Text>
      <Text> </Text>
      <Text style={styles.myYellowText}>Add sub-item:</Text>
      <Text style={styles.myText}>Short press</Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.myYellowText}>Touch anywhere on this</Text>
      <Text style={styles.myYellowText}>screen to return</Text>
    </View>
  </TouchableHighlight>
);

export default Instructions;
