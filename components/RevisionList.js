import React from "react";
import { FlatList } from "react-native";

import RevisionItem from "./RevisionItem";
import UpOneLevelButton from "./UpOneLevelButton";
import RevisionInputButton from "./RevisionInputButton";

const RevisionList = ({
  handleClickRevision,
  handleDeleteRevision,
  handleAddRevision,
  handleUpOneLevelButton,
  revisionList,
  embedLevel,
  showKeyboard
}) => (
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
        <RevisionInputButton handleAddRevision={handleAddRevision} />
      ) : embedLevel ? (
        <UpOneLevelButton handleUpOneLevelButton={handleUpOneLevelButton} />
      ) : null
    }
  />
);

export default RevisionList;
