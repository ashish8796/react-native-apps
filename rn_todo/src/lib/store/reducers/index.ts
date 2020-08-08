import {ADD_TODO, IS_MODAL_VISIBLE} from '../actions/actions';

/* eslint-disable @typescript-eslint/no-unused-vars */
const initState = {
  todoArr: [],
  isModalVisible: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {...state, todoArr: [...state.todoArr, action.payload]};
    }
    case IS_MODAL_VISIBLE: {
      return {...state, isModalVisible: action.payload};
    }
    default:
      ADD_TODO;
      return state;
  }
};

export default reducer;
