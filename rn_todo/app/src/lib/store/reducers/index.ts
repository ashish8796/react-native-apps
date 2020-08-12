import {
  ADD_TODO,
  IS_MODAL_VISIBLE,
  CHANGE_CURRENT_TODO,
  CHANGE_SHOW_TODO_MODAL,
  DELETE_TODO,
  CHANGE_TODO_STATUS,
  SET_ALL_TODOS,
} from '../actions/actions';

import {setItem} from '../../storage';
import {
  AddTodo,
  ChangeModalVisibility,
  ChangeCurrentTodo,
  ChangeShowTodoModal,
  ChangeTodoStatus,
  DeleteTodo,
  SetAllTodos,
} from '../actions/types';

export type Todo = {
  topic: string;
  id: number;
  isCompleted: boolean;
  description: string;
};

export interface InitState {
  todoArr: Array<Todo>;
  isModalVisible: boolean;
  currentTodo: null | Todo;
  showTodoModal: boolean;
}

type MainAction =
  | AddTodo
  | ChangeModalVisibility
  | ChangeCurrentTodo
  | ChangeShowTodoModal
  | ChangeTodoStatus
  | DeleteTodo
  | SetAllTodos;

const initState: InitState = {
  todoArr: [],
  isModalVisible: false,
  currentTodo: null,
  showTodoModal: false,
};

const reducer = (state = initState, action: MainAction): InitState => {
  switch (action.type) {
    case ADD_TODO: {
      const newState = {...state, todoArr: [...state.todoArr, action.payload]};
      setItem('todos', newState.todoArr);
      return newState;
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
      const newState = {
        ...state,
        todoArr: state.todoArr.filter((todo) => todo.id !== action.payload),
      };
      setItem('todos', newState.todoArr);
      return newState;
    }

    case CHANGE_TODO_STATUS: {
      const newState = {
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
      setItem('todos', newState.todoArr);
      return newState;
    }

    case SET_ALL_TODOS: {
      return {...state, todoArr: action.payload};
    }

    default:
      ADD_TODO;
      return state;
  }
};

export default reducer;
