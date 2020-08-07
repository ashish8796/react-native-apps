/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import PlusIcon from './../assests/svg/Plus';
import {} from 'react-native-gesture-handler';
import CreateTodo from './CreateTodo';

function AddTodo() {
  const [isCreateTodoVisible, setIsCreateTodoVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Text style={styles.headText}>TTD</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text>Any Text</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.addTodoContainer}
        onPress={() => {
          setIsCreateTodoVisible(!isCreateTodoVisible);
        }}>
        <PlusIcon style={{color: '#fff', fill: '#fff'}} />
      </TouchableOpacity>
      {isCreateTodoVisible && <CreateTodo />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {flex: 1, alignItems: 'center', backgroundColor: '#221738'},
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
    flex: 1,
    backgroundColor: '#221738',
  },
  addTodoContainer: {
    position: 'absolute',
    bottom: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#5c2a9d',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddTodo;
