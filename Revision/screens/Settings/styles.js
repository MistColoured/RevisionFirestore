import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  settings: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    backgroundColor: "#00bb55"
  },
  text: {
    fontSize: 20,
    color: "#fff"
  },
  yellowText: {
    fontSize: 20,
    color: "#ff0"
  }
});

export default styles;
