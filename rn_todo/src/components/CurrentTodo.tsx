/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Trash from './../assests/svg/trash';
import Bitmap from './../assests/svg/Bitmap';
import Check from './../assests/svg/check';
import actions from './../lib/store/actions/actions';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
let isTodoComplete;

const CurrentTodo = () => {
  const {currentTodo} = useSelector((state) => state);
  const dispatch = useDispatch();
  isTodoComplete = currentTodo.isCompleted;

  return (
    <View style={styles.currentTodoBox}>
      <View style={styles.todoWrapper}>
        <View style={styles.topicBox}>
          <Text
            style={[
              styles.todoTopic,
              {textDecorationLine: isTodoComplete ? 'line-through' : 'none'},
            ]}>
            {currentTodo.topic}
          </Text>
          <View style={styles.topicLine} />
        </View>

        <Text style={styles.topicDiscription}>{currentTodo.description}</Text>

        <View style={styles.todoStatus}>
          <View>
            {!currentTodo.isCompleted ? (
              <Bitmap width={25} height={25} />
            ) : (
              <Check width={25} height={25} />
            )}
          </View>
          <Text style={styles.todoStatusText}>Complete</Text>
        </View>

        <TouchableOpacity
          style={styles.deleteTodo}
          onPress={() => {
            dispatch(actions.deleteTodo(currentTodo.id));
            dispatch(actions.changeShowTodoModal(false));
          }}>
          <Trash width={20} height={20} />
          <Text style={styles.deletTodoText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currentTodoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  todoWrapper: {
    backgroundColor: '#fff',
    width: width * 0.85,
    height: height * 0.45,
    borderRadius: 4,
    elevation: 8,
    paddingHorizontal: 30,
    position: 'relative',
  },

  todoTopic: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  topicBox: {
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginVertical: 20,
    flexDirection: 'row',
  },

  topicLine: {
    borderColor: '#979797',
    borderTopWidth: 0.8,
    width: 120,
    marginLeft: 20,
  },

  topicDiscription: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: 'black',
    marginVertical: 20,
    textAlign: 'justify',
  },

  todoStatus: {
    position: 'absolute',
    bottom: '25%',
    paddingLeft: 30,
    flexDirection: 'row',
  },

  todoStatusText: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15,
  },

  deleteTodo: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FF5C5C',
    width: width * 0.85,
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  deletTodoText: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 20,
  },
});

export default CurrentTodo;
