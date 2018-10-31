import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const RoundAddButton = ({ handleToggleKeyboard }) => (
  <TouchableOpacity
    style={{
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      alignItems: "center",
      justifyContent: "center",
      width: 60,
      height: 60,
      backgroundColor: "#19f",
      borderRadius: 100,
      position: "absolute",
      bottom: 10,
      right: 10
    }}
    onPress={handleToggleKeyboard}
  >
    <Icon name={"plus"} size={20} color="#fff" />
  </TouchableOpacity>
);

export default RoundAddButton;
