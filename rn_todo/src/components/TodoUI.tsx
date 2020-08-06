/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import {HeaderTodo} from './Header';
import Todos from './Todos';
import AddTodo from './AddTodo';

function TodoUI() {
  return (
    <View>
      <HeaderTodo />
      <Todos />
      <AddTodo />
    </View>
  );
}

export default TodoUI;
