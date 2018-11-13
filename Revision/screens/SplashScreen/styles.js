import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: width / 2,
    height: width / 2,
    marginBottom: 15
  },
  text: {
    fontSize: 60,
    color: "#ff0",
    marginBottom: 15
  },
  container: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    backgroundColor: "#00bb55"
  }
});

export default styles;
