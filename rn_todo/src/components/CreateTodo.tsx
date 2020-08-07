import React, {useState, useEffect} from 'react';
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

const {height} = Dimensions.get('screen');

function CreateTodo({changeVisibilty = () => {}}) {
  const dispatch = useDispatch();
  const {todoArr} = useSelector((state) => state);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    console.log(todoArr);
  }, [todoArr]);

  return (
    <Modal
      transparent
      animationType={'fade'}
      onRequestClose={() => {
        changeVisibilty(false);
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
              onChangeText={(text) => {
                setTopic(text);
              }}
            />
          </View>

          <View style={styles.descrriptionContainer}>
            <Text style={styles.descrriptionText}>Description</Text>
            <TextInput
              style={styles.descrriptionInput}
              placeholder={'Write Description'}
              onChangeText={(text) => {
                setDescription(text);
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              dispatch(actions.addTodo(topic, description));
            }}>
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