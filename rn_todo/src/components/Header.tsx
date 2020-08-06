/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

export const HeaderTodo = () => {
  const [text, setText] = useState('');

  const handleOnChange = (text) => {
    setText(text);
  };

  return (
    <View>
      <Text style={styles.heading}>To-Do List</Text>
      {/* <TextInput style={styles.textInput} onChange={handleOnChange} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'red',
    borderWidth: 2,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    // justifyContent: 'center',
    textAlign: 'center',
    marginTop: 100,
  },
});
