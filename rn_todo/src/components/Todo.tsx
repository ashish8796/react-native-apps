import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Bitmap from './../assests/svg/Bitmap';
import Checked from './../assests/svg/check';
import {useSelector, useDispatch} from 'react-redux';
import actions from './../lib/store/actions/actions';

const {width} = Dimensions.get('screen');

const Todo = ({todo}) => {
  const dispatch = useDispatch();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {currentTodo} = useSelector((state) => state);

  useEffect(() => {
    console.log(currentTodo, currentTodo.id);
  });

  return (
    <TouchableOpacity
      style={styles.todoContainer}
      onPress={() => {
        dispatch(actions.changeCurrentTodo(todo));
        dispatch(actions.changeShowTodoModal(true));
      }}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => {
          setToggleCheckBox(!toggleCheckBox);
          dispatch(actions.changeCurrentTodo(todo));
          dispatch(
            actions.changeTodoStatus(currentTodo.id ? currentTodo.id : todo.id),
          );
        }}>
        {toggleCheckBox ? <Checked width={30} height={30} /> : <Bitmap />}
      </TouchableOpacity>
      <View style={styles.todoTextContainer}>
        <Text style={styles.todoText}>
          {todo.topic.slice(0, 15)}
          {todo.topic.length > 15 && '...'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: width * 0.8,
    height: 56,
    alignItems: 'center',
    marginVertical: 15,
  },

  todoTextContainer: {
    alignItems: 'center',
    flex: 1,
  },

  todoText: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  checkbox: {
    marginLeft: 20,
  },
});

export default Todo;
