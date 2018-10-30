import React from "react";
import { Text, TouchableHighlight } from "react-native";
import Swipeout from "react-native-swipeout";
import styles from "./style";

const TodoItem = ({
  handleClickTodo,
  handleDeleteTodo,
  item: { _key, todo }
}) => {
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
          handleDeleteTodo(_key);
        }
      }
    ]
  };
  return (
    <Swipeout {...swipeSettings}>
      <TouchableHighlight
        style={styles.button}
        underlayColor={"#00cc55"}
        onPress={() => handleClickTodo(_key)}
      >
        <Text style={styles.myText}>{todo}</Text>
      </TouchableHighlight>
    </Swipeout>
  );
};

export default TodoItem;

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
