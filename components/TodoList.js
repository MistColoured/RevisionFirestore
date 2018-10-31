import React, { Component } from "react";
import { Text, FlatList, TouchableHighlight, ScrollView } from "react-native";

import TodoItem from "./TodoItem";
import UpOneLevelButton from "./UpOneLevelButton";
import TodoInputButton from "./TodoInputButton";

const TodoList = ({
  handleClickTodo,
  handleDeleteTodo,
  handleAddTodo,
  handleUpOneLevelButton,
  todoList,
  embedLevel,
  showKeyboard
}) => (
  <FlatList
    data={todoList}
    scrollToEnd={true}
    renderItem={({ item }) => {
      return item.todo ? (
        <TodoItem
          item={item}
          handleClickTodo={handleClickTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ) : null;
    }}
    keyExtractor={item => item._key}
    ListFooterComponent={
      showKeyboard ? (
        <TodoInputButton handleAddTodo={handleAddTodo} />
      ) : embedLevel ? (
        <UpOneLevelButton handleUpOneLevelButton={handleUpOneLevelButton} />
      ) : null
    }
  />
);

export default TodoList;
