import React from "react";
import { Text, TouchableHighlight, Alert } from "react-native";
import Swipeout from "react-native-swipeout";
import styles from "./style";

const RevisionItem = ({
  handleClickRevision,
  handleDeleteRevision,
  item: { _key, revision }
}) => {
  const swipeSettings = {
    autoClose: true,
    buttonWidth: 100,
    onOpen: (secId, rowId, direction, id) => {
      console.log("Delete slider", id);
    },
    right: [
      {
        text: "Delete",
        backgroundColor: "red",
        underlayColor: "rgba(0, 0, 0, 1, 0.6)",
        onPress: () => {
          Alert.alert(
            "Delete",
            "Are you sure you want to delete ?",
            [
              {
                text: "No",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "Yes",
                onPress: () => {
                  handleDeleteRevision(_key);
                }
              }
            ],
            { cancelable: true }
          );

          // handleDeleteRevision(_key);
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
