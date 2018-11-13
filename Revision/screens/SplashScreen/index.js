import React from "react";
import { View, Image, Text, ActivityIndicator } from "react-native";
import styles from "./styles";

const SplashScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Revision</Text>
    <Image style={styles.image} source={require("./images/revision.png")} />
    <ActivityIndicator size="large" />
  </View>
);

export default SplashScreen;
