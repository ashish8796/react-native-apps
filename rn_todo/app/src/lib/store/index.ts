import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
 
const logger = createLogger({});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
