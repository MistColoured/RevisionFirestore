import { StyleSheet, Dimensions } from "react-native";
// import { relative } from "path";

const { height, width } = Dimensions.get("window");
console.log("From the stylesheet", height, width);

const constants = {
  actionColor: "#24CE84",
  buttons: {
    height: height / 8,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#119911"
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  listview: {
    flex: 1,
    backgroundColor: "#ee1122"
  },
  li: {
    backgroundColor: "#fff",
    borderBottomColor: "#eee",
    borderColor: "transparent",
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  liContainer: {
    flex: 2
  },
  liText: {
    color: "#333",
    fontSize: 16
  },
  navbar: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "#eee",
    borderColor: "transparent",
    borderWidth: 1,
    justifyContent: "center",
    height: 44,
    flexDirection: "row"
  },
  navbarTitle: {
    color: "#444",
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: "#fff",
    height: 22
  },
  center: {
    textAlign: "center"
  },
  actionText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center"
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: "transparent",
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  button: {
    ...constants.buttons,
    backgroundColor: "#00bb55"
  },
  redButton: {
    ...constants.buttons,
    backgroundColor: "#ee0055"
  },
  addRevisionButton: {
    ...constants.buttons,
    backgroundColor: "#fff"
  },
  instructionsPage: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    backgroundColor: "#00bb55"
  },
  myText: {
    fontSize: 20,
    color: "#ffffff"
  },
  myYellowText: {
    fontSize: 20,
    color: "#ffff00"
  },
  revisionInput: {
    height: 44,
    width: 300,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 3,
    borderRadius: 22,
    position: "relative"
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040"
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default styles;
