import {
  ADD_TODO,
  IS_MODAL_VISIBLE,
  CHANGE_CURRENT_TODO,
  CHANGE_SHOW_TODO_MODAL,
  DELETE_TODO,
  CHANGE_TODO_STATUS,
} from '../actions/actions';

/* eslint-disable @typescript-eslint/no-unused-vars */
const initState = {
  todoArr: [],
  isModalVisible: false,
  currentTodo: {},
  showTodoModal: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {...state, todoArr: [...state.todoArr, action.payload]};
    }

    case IS_MODAL_VISIBLE: {
      return {...state, isModalVisible: action.payload};
    }

    case CHANGE_CURRENT_TODO: {
      return {...state, currentTodo: action.payload};
    }

    case CHANGE_SHOW_TODO_MODAL: {
      return {
        ...state,
        showTodoModal: action.payload,
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        todoArr: state.todoArr.filter((todo) => todo.id !== action.payload),
      };
    }

    case CHANGE_TODO_STATUS: {
      return {
        ...state,
        todoArr: state.todoArr.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return todo;
        }),
      };
    }

    default:
      ADD_TODO;
      return state;
  }
};

export default reducer;
