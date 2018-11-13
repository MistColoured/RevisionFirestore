import { StyleSheet, Dimensions } from "react-native";
import { BUTTON, TEXT } from "../../styles/common";

const styles = StyleSheet.create({
  button: {
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
  }
});

export default styles;
