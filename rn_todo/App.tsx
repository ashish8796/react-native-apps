import React from 'react';
import {Provider} from 'react-redux';
import store from './src/lib/store';
import MainNavigator from './src/lib/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
