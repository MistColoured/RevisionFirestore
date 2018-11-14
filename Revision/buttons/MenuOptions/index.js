import React from "react";
import { View } from "react-native";
import Instructions from "../../screens/Instructions";
import Settings from "../../screens/Settings";
import Button from "../Button";

const MenuOptions = ({
  handleToggleMenu,
  handleToggleInstructions,
  showInstructions,
  handleToggleSettings,
  showSettings
}) => (
  <View>
    {showInstructions ? (
      <Instructions handleToggleInstructions={handleToggleInstructions} />
    ) : showSettings ? (
      <Settings handleToggleSettings={handleToggleSettings} />
    ) : (
      <View>
        <Button
          onPress={handleToggleInstructions}
          text="Instructions"
          colour="#ee0055"
        />
        <Button
          onPress={handleToggleSettings}
          text="Settings"
          colour="#ee0055"
        />
        <Button
          onPress={handleToggleMenu}
          text="Back to list"
          colour="#ff0066"
        />
      </View>
    )}
  </View>
);

export default MenuOptions;
