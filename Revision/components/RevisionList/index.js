import React from "react";
import { FlatList } from "react-native";
import RevisionInput from "../../buttons/RevisionInput";
import Button from "../../buttons/Button";

const RevisionList = ({
  handleClickRevision,
  handleDeleteRevision,
  handleAddRevision,
  handleUpOneLevel,
  handleToggleMenu,
  revisionList,
  embedLevel,
  showKeyboard
}) => {
  return (
    <FlatList
      data={revisionList}
      // scrollToEnd={true}
      renderItem={({ item: { revision, _key } }) => (
        <Button
          onPress={() => handleClickRevision(_key)}
          text={revision}
          colour={"#00cc55"}
        />
      )}
      keyExtractor={item => item._key}
      ListFooterComponent={
        showKeyboard ? (
          <RevisionInput handleAddRevision={handleAddRevision} />
        ) : embedLevel ? (
          <Button
            onPress={handleUpOneLevel}
            text="Up One Level"
            colour="#ff0055"
          />
        ) : revisionList.length ? (
          <Button onPress={handleToggleMenu} text="Menu" colour="#ff0066" />
        ) : null
      }
    />
  );
};

export default RevisionList;
