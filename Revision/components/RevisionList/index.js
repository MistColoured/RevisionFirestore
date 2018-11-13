import React from "react";
import { FlatList } from "react-native";

import RevisionItem from "../RevisionItem";
import UpOneLevelButton from "../../buttons/UpOneLevelButton";
import ToggleMenuButton from "../../buttons/ToggleMenuButton";
import RevisionInput from "../RevisionInput";

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
          <UpOneLevelButton handleUpOneLevelButton={handleUpOneLevelButton} />
        ) : revisionList.length ? (
          <ToggleMenuButton handleToggleMenu={handleToggleMenu} />
        ) : null
      }
    />
  );
};

export default RevisionList;
