import React from "react";
import { Text, TouchableHighlight } from "react-native";
import Swipeout from "react-native-swipeout";
import styles from "./style";

const RevisionItem = ({
  handleClickRevision,
  handleDeleteRevision,
  item: { _key, revision },
  item
}) => {
  // console.log("Item: ", item);
  const swipeSettings = {
    autoClose: true,
    onOpen: (secId, rowId, direction, id) => {
      console.log("Hello", id);
    },
    right: [
      {
        text: "zztopst",
        onPress: () => {
          console.log("rocks");
          handleDeleteRevision(_key);
        }
      }
    ]
  };
  return (
    <Swipeout {...swipeSettings}>
      <TouchableHighlight
        style={styles.button}
        underlayColor={"#00cc55"}
        onPress={() => handleClickRevision(_key)}
      >
        <Text style={styles.myText}>{revision}</Text>
      </TouchableHighlight>
    </Swipeout>
  );
};

export default RevisionItem;

// let swipeBtns = [{
//   text: 'Delete',
//   backgroundColor: 'red',
//   underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
//   onPress: () => { this.deleteNote(rowData) }
// }];
// const swipeSettings = {
//   autoClose: true,
//   onOpen: (secId, rowId, direction, id) => {
//     console.log('Hello', id)
//   },
//   right: [
//     {
//       text: 'zztop',
//       onPress: () => {
//         // console.log('rocks', rowId)
//       }
//     }
//   ]
// }
