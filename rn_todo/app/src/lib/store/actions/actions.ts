import {
  AddTodo,
  ChangeModalVisibility,
  ChangeCurrentTodo,
  ChangeShowTodoModal,
  DeleteTodo,
  ChangeTodoStatus,
} from './types';
import {Todo} from '../reducers';
import {Dispatch} from 'redux';
import {addNewTodo, getAllTodos, deleteATodo} from '../../../api';

export const ADD_TODO = 'ADD_TODO';
export const IS_MODAL_VISIBLE = 'IS_MODAL_VISIBLE';
export const CHANGE_CURRENT_TODO = 'CHANGE_CURRENT_TODO';
export const CHANGE_SHOW_TODO_MODAL = 'CHANGE_SHOW_TODO_MODAL';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';
export const SET_ALL_TODOS = 'SET_ALL_TODOS';

export interface TodoId {
  id: number;
}

const actions = {
  addTodo: ({topic, description}: Todo) => async (dispatch: Dispatch) => {
    await addNewTodo({topic, description});
    dispatch(actions.setAllTodos());
  },

  changeModalVisibility(isModalVisible: boolean): ChangeModalVisibility {
    return {
      type: IS_MODAL_VISIBLE,
      payload: isModalVisible,
    };
  },

  changeCurrentTodo(todo: Todo): ChangeCurrentTodo {
    return {
      type: CHANGE_CURRENT_TODO,
      payload: todo,
    };
  },

  changeShowTodoModal(showTodoModal: boolean): ChangeShowTodoModal {
    return {
      type: CHANGE_SHOW_TODO_MODAL,
      payload: showTodoModal,
    };
  },

  deleteTodo: (id: number) => async (dispatch: Dispatch) => {
    await deleteATodo(id);
    dispatch(actions.setAllTodos());
  },

  changeTodoStatus(id: number): ChangeTodoStatus {
    return {
      type: CHANGE_TODO_STATUS,
      payload: id,
    };
  },

  setAllTodos: () => async (dispatch: Dispatch) => {
    try {
      const {data} = await getAllTodos();
      dispatch({
        type: SET_ALL_TODOS,
        payload: data.todos,
      });
    } catch (e) {
      console.log(e);
    }
  },
};

export default actions;
