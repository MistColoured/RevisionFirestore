import React from "react";
import { Text, TouchableHighlight } from "react-native";

import styles from "./style";

const TodoItem = ({ handleClickTodo, item: { _key, todo } }) => (
  <TouchableHighlight
    style={styles.button}
    underlayColor={"#00cc55"}
    onPress={() => handleClickTodo(_key)}
  >
    <Text style={styles.myText}>{todo}</Text>
  </TouchableHighlight>
);

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
//   return (

//     <Swipeout id={27} {...swipeSettings}>

//     </Swipeout>
//   );
// }
