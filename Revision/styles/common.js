import { Dimensions } from "react-native";

export const COLOR_PRIMARY = "#58C9B9";
export const COLOR_SECONDARY = "#111";
export const FONT_NORMAL = "OpenSans-Regular";
export const FONT_BOLD = "OpenSans-Bold";
export const BORDER_RADIUS = 5;

const { height, width } = Dimensions.get("window");

const BUTTON = {
  height: height / 8,
  justifyContent: "center",
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: "#fff"
};

const TEXT = {
  fontSize: 20,
  color: "#fff"
};

export { BUTTON, TEXT };
