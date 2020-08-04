import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  View,
} from 'react-native';

declare const global: {HermesInternal: null | {}};

interface IAppState {
  todos: Array<object>;
  todo: string;
}

const App: React.FunctionComponent = () => {
  const [state, setState] = useState<IAppState>({
    todos: [],
    todo: '',
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{backgroundColor: 'red'}}>
        <TextInput
          onChangeText={(text) =>
            setState((s) => ({
              ...s,
              todo: text,
            }))
          }
          style={{borderWidth: 1, borderColor: '#000'}}
        />
      </View>
      <SafeAreaView>
        <Text style={styles.text}>{state.todo}</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});

export default App;
