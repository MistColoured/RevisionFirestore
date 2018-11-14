import { StyleSheet, Dimensions } from "react-native";
import { BUTTON, TEXT } from "../../styles/common";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    height: height / 8,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff"
  },
  text: {
    fontSize: 20,
    color: "#fff"
  }
});

export default styles;
