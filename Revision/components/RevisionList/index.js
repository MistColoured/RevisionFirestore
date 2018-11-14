import React from "react";
import { FlatList } from "react-native";

import Button from "../../buttons/Button";
import RevisionItem from "../RevisionItem";
import RevisionInput from "../../buttons/RevisionInput";

const RevisionList = ({
  handleClickRevision,
  handleDeleteRevision,
  handleAddRevision,
  handleUpOneLevelButton,
  handleToggleMenu,
  revisionList,
  embedLevel,
  showKeyboard
}) => {
  return (
    <FlatList
      data={revisionList}
      // scrollToEnd={true}
      renderItem={({ item }) => (
        <RevisionItem
          item={item}
          handleClickRevision={handleClickRevision}
          handleDeleteRevision={handleDeleteRevision}
        />
      )}
      keyExtractor={item => item._key}
      ListFooterComponent={
        showKeyboard ? (
          <RevisionInput handleAddRevision={handleAddRevision} />
        ) : embedLevel ? (
          <Button
            onPress={handleUpOneLevelButton}
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
