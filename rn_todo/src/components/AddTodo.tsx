/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import PlusIcon from './../assests/svg/Plus';
import {} from 'react-native-gesture-handler';
import CreateTodo from './CreateTodo';
import {useSelector, useDispatch} from 'react-redux';
import actions from './../lib/store/actions/actions';
import CheckBox from '@react-native-community/checkbox';

const {width} = Dimensions.get('screen');

function AddTodo() {
  const dispatch = useDispatch();
  const {todoArr} = useSelector((state) => state);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  useEffect(() => {});
  // const [isCreateTodoVisible, setIsCreateTodoVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Text style={styles.headText}>TTD</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {todoArr.length === 0 && <Text>Any Text</Text>}
        {todoArr.map((todo, index) => (
          <View key={index} style={styles.todoContainer}>
            <CheckBox
              // disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => {
                setToggleCheckBox(newValue);
              }}
            />
            <Text style={styles.todoText}>{todo.topic}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.addTodoContainer}
        onPress={() => {
          dispatch(actions.changeModalVisibility(true));
        }}>
        <PlusIcon />
      </TouchableOpacity>

      <CreateTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#221738',
    width: '100%',
  },

  head: {
    alignItems: 'center',
    backgroundColor: '#140A26',
    width: '100%',
  },

  headText: {
    fontSize: 40,
    marginVertical: 20,
    fontWeight: '700',
    color: '#fff',
  },

  scrollView: {
    width: width,
    flex: 1,
  },

  addTodoContainer: {
    position: 'absolute',
    bottom: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#5B3E96',
    justifyContent: 'center',
    alignItems: 'center',
  },

  todoContainer: {
    width: '100%',
    backgroundColor: '#fff',
  },

  todoText: {
    fontSize: 20,
  },
});

export default AddTodo;
