import React, {useState, useRef} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {useDispatch, useSelector} from 'react-redux';
import actions from './../lib/store/actions/actions';
import {InitState} from '../lib/store/reducers';

const {height} = Dimensions.get('screen');

function CreateTodo() {
  const dispatch = useDispatch();
  const {isModalVisible} = useSelector((state: InitState) => state);
  const [topic, setTopic] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const descriptionRef = useRef<TextInput>(null);

  const handleAddTodo = () => {
    const url = 'http://10.0.2.2:3001/add-todo';
    (async () => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic,
          description,
          id: Date.now(),
          isCompleted: false,
        }),
      });
      const data = response.json();
      // .then((response) => response.json())
      // // .then((data) => console.log(data.text))
      // .catch((error) => console.log(error));
    })();

    if (!topic) {
      dispatch(actions.changeModalVisibility(false));
      return;
    }
    dispatch(actions.addTodo(topic, description));
    dispatch(actions.changeModalVisibility(false));
    setTopic('');
    setDescription('');
  };

  return (
    <Modal
      transparent
      animationType={'fade'}
      visible={isModalVisible}
      onRequestClose={() => {
        dispatch(actions.changeModalVisibility(false));
      }}>
      <BlurView
        blurType="light"
        blurAmount={3.5}
        style={styles.modalContainer}
      />
      <View style={styles.container}>
        <View style={styles.madalView}>
          <View style={styles.taskContainer}>
            <Text style={styles.createTask}>Create New Tasks</Text>

            <View style={styles.line} />
          </View>

          <View style={styles.topicContainer}>
            <Text style={styles.topicText}>Topic</Text>

            <TextInput
              style={styles.topicInput}
              placeholder={'Write Topic'}
              value={topic}
              onChangeText={(text) => {
                setTopic(text);
              }}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                descriptionRef.current?.focus();
              }}
            />
          </View>

          <View style={styles.descrriptionContainer}>
            <Text style={styles.descrriptionText}>Description</Text>

            <TextInput
              style={styles.descrriptionInput}
              placeholder={'Write Description'}
              ref={descriptionRef}
              value={description}
              onChangeText={(text) => {
                setDescription(text);
              }}
              onSubmitEditing={handleAddTodo}
            />
          </View>

          <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
            <Text style={styles.addText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  modalContainer: {
    ...StyleSheet.absoluteFillObject,
  },

  madalView: {
    height: height * 0.73,
    backgroundColor: '#fff',
    alignContent: 'center',
  },

  taskContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  createTask: {
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 5,
    marginTop: 20,
  },

  line: {
    borderColor: '#979797',
    borderWidth: 0.4,
    transform: [{rotate: '90deg'}],
    height: 120,
    marginLeft: 70,
    marginTop: -20,
  },

  topicContainer: {
    paddingHorizontal: 20,
  },

  topicText: {
    fontSize: 20,
    fontWeight: '700',
  },

  topicInput: {
    fontSize: 18,
    borderColor: '#979797',
    borderBottomWidth: 0.8,
  },

  descrriptionContainer: {
    paddingHorizontal: 20,
    marginTop: 50,
  },

  descrriptionText: {
    fontSize: 20,
    fontWeight: '700',
  },

  descrriptionInput: {
    fontSize: 18,
    borderColor: '#979797',
    borderBottomWidth: 0.8,
  },

  addButton: {
    position: 'absolute',
    backgroundColor: '#5B3E96',
    width: '100%',
    bottom: 0,
    paddingVertical: 15,
    alignItems: 'center',
  },

  addText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default CreateTodo;
