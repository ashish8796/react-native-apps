import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Bitmap from './../assests/svg/Bitmap';
import Checked from './../assests/svg/check';
import {useDispatch} from 'react-redux';
import actions from './../lib/store/actions/actions';
import {Todo} from '../lib/store/reducers';

const {width} = Dimensions.get('screen');
interface Props {
  todo: Todo;
}

const EachTodo: React.FC<Props> = ({todo}) => {
  const dispatch = useDispatch();

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
          dispatch(actions.changeCurrentTodo(todo));
          dispatch(actions.changeTodoStatus(todo.id));
        }}>
        {todo.isCompleted ? <Checked width={30} height={30} /> : <Bitmap />}
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

export default EachTodo;
