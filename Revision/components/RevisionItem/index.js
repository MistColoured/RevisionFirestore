import React from "react";
import Button from "../../buttons/Button";

const RevisionItem = ({ handleClickRevision, item: { _key, revision } }) => {
  return (
    <Button
      onPress={() => handleClickRevision(_key)}
      text={revision}
      colour={"#00cc55"}
    />
  );
};

export default RevisionItem;
