import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";

import styles from "./styles";

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string
};

export default Container;
