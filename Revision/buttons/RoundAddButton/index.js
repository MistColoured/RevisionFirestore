import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const RoundAddButton = ({ handleShowKeyboard }) => (
  <TouchableOpacity style={styles.button} onPress={handleShowKeyboard}>
    <Icon name={"plus"} size={20} color="#fff" />
  </TouchableOpacity>
);

export default RoundAddButton;
