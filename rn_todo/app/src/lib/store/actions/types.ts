import {
  ADD_TODO,
  IS_MODAL_VISIBLE,
  CHANGE_CURRENT_TODO,
  CHANGE_SHOW_TODO_MODAL,
  DELETE_TODO,
  CHANGE_TODO_STATUS,
  SET_ALL_TODOS,
} from './actions';
import {Todo} from './../reducers';

export interface AddTodo {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface ChangeModalVisibility {
  type: typeof IS_MODAL_VISIBLE;
  payload: boolean;
}

export interface ChangeCurrentTodo {
  type: typeof CHANGE_CURRENT_TODO;
  payload: Todo;
}

export interface ChangeShowTodoModal {
  type: typeof CHANGE_SHOW_TODO_MODAL;
  payload: boolean;
}

export interface DeleteTodo {
  type: typeof DELETE_TODO;
  payload: number;
}

export interface ChangeTodoStatus {
  type: typeof CHANGE_TODO_STATUS;
  payload: number;
}

export interface SetAllTodos {
  type: typeof SET_ALL_TODOS;
  payload: Array<Todo>;
}
