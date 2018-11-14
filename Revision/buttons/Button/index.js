// @flow

import React from "react";
import { Text, TouchableHighlight } from "react-native";
// $FlowFixMe
import Color from "color";

import styles from "./styles";

type Props = {
  onPress: Function,
  text: string,
  colour: string
};

const Button = ({ onPress, text, colour }: Props) => {
  const buttonStyle = [styles.button];
  buttonStyle.push({ backgroundColor: `${colour}` });
  const color = Color(`${colour}`).lighten(0.3);

  return (
    <TouchableHighlight
      style={buttonStyle}
      underlayColor={color}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

export default Button;
