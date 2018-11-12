import React from "react";
import { View, Image, Dimensions, Text } from "react-native";

const width = Dimensions.get("window").width;

const SplashScreen = () => (
  <View>
    <Image source={require("./images/revision.png")} />
  </View>
);

export default SplashScreen;
