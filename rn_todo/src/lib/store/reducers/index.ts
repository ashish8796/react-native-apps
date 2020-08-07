import {ADD_TODO} from '../actions/actions';

/* eslint-disable @typescript-eslint/no-unused-vars */
const initState = {
  todoArr: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {...state, todoArr: [...state.todoArr, action.payload]};
    }
    default:
      ADD_TODO;
      return state;
  }
};

export default reducer;
