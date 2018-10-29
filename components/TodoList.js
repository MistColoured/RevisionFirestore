import React, { Component } from "react";
import { Text, FlatList, TouchableHighlight } from "react-native";

import TodoItem from "./TodoItem";
import UpOneLevelButton from "./UpOneLevelButton";

const TodoList = ({ handleClickTodo, handleUpOneLevelButton, todoList }) => (
  <FlatList
    data={todoList}
    renderItem={({ item }) => {
      return item.todo ? (
        <TodoItem item={item} handleClickTodo={handleClickTodo} />
      ) : null;
    }}
    keyExtractor={item => item._key}
    ListFooterComponent={
      <UpOneLevelButton handleUpOneLevelButton={handleUpOneLevelButton} />
    }
  />
);

export default TodoList;
