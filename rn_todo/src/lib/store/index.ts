/* eslint-disable @typescript-eslint/no-unused-vars */
import {createStore} from 'redux';
import reducer from './reducers';
// import {} from 'react-redux';

const store = createStore(reducer);

export default store;
