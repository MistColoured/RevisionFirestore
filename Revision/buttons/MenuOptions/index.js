import React from "react";
import { View } from "react-native";
import ToggleInstructionsButton from "../ToggleInstructionsButton";
import Instructions from "../../screens/Instructions";
import ToggleSettingsButton from "../ToggleSettingsButton";
import Settings from "../../screens/Settings";
import GoToListButton from "../GoToListButton";

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
        <ToggleInstructionsButton
          handleToggleInstructions={handleToggleInstructions}
        />
        <ToggleSettingsButton handleToggleSettings={handleToggleSettings} />
        <GoToListButton handleToggleMenu={handleToggleMenu} />
      </View>
    )}
  </View>
);

export default MenuOptions;
