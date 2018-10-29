import React, { Component } from "react";
import { Text, FlatList, TouchableHighlight } from "react-native";

import TodoItem from "./TodoItem";

const TodoList = ({ handleClickTodo, todoList }) => (
  <FlatList
    data={todoList}
    renderItem={({ item }) => {
      return item.todo ? (
        <TodoItem item={item} handleClickTodo={handleClickTodo} />
      ) : null;
    }}
    keyExtractor={item => item._key}
    ListFooterComponent={this.renderFooter}
  />
);

export default TodoList;
