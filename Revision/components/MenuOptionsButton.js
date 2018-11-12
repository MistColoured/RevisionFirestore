import React from "react";
import { View } from "react-native";
import InstructionsButton from "./InstructionsButton";
import Instructions from "./Instructions";
import SettingsButton from "./SettingsButton";
import Settings from "./Settings/Settings";
import GoToListButton from "./GoToListButton";

const MenuOptionsButton = ({
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
        <InstructionsButton
          handleToggleInstructions={handleToggleInstructions}
        />
        <SettingsButton handleToggleSettings={handleToggleSettings} />
        <GoToListButton handleToggleMenu={handleToggleMenu} />
      </View>
    )}
  </View>
);

export default MenuOptionsButton;
