/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import PlusIcon from './../assests/svg/Plus';
import {} from 'react-native-gesture-handler';
import CreateTodo from './CreateTodo';
import {useSelector, useDispatch} from 'react-redux';
import actions from './../lib/store/actions/actions';
import Todo from './Todo';
import {BlurView} from '@react-native-community/blur';
import CurrentTodo from './CurrentTodo';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

function AddTodo() {
  const dispatch = useDispatch();
  const {todoArr, currentTodo, showTodoModal} = useSelector((state) => state);

  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Text style={styles.headText}>TTD</Text>
      </View>

      <View style={styles.scrollViewBox}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {todoArr.length === 0 ? (
            <Text>Any Text</Text>
          ) : (
            todoArr.map((todo, index) => <Todo {...{todo}} key={index} />)
          )}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.addTodoContainer}
        onPress={() => {
          dispatch(actions.changeModalVisibility(true));
        }}>
        <PlusIcon />
      </TouchableOpacity>

      <Modal
        transparent
        visible={showTodoModal}
        animationType={'fade'}
        onRequestClose={() => {
          dispatch(actions.changeShowTodoModal(false));
        }}>
        <BlurView
          blurType={'light'}
          blurAmount={3.5}
          style={styles.todoBlurView}
        />
        <CurrentTodo />
      </Modal>

      <CreateTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#221738',
  },

  head: {
    alignItems: 'center',
    backgroundColor: '#140A26',
    width: width,
  },

  headText: {
    fontSize: 40,
    marginVertical: 20,
    fontWeight: '700',
    color: '#fff',
  },

  scrollViewBox: {
    height: height * 0.65,
    paddingVertical: 30,
  },

  scrollView: {
    width,
    alignItems: 'center',
  },

  addTodoContainer: {
    position: 'absolute',
    bottom: height * 0.03,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#5B3E96',
    justifyContent: 'center',
    alignItems: 'center',
  },

  todoBlurView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default AddTodo;
