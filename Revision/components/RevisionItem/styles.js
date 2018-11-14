import { StyleSheet, Dimensions } from "react-native";
import { BUTTON, TEXT } from "../../styles/common";

const styles = StyleSheet.create({
  button: {
    ...BUTTON,
    flex: 1,
    backgroundColor: "#00bb55"
  },
  text: {
    ...TEXT
  }
});

export default styles;
