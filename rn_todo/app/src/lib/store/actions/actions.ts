import {
  AddTodo,
  ChangeModalVisibility,
  ChangeCurrentTodo,
  ChangeShowTodoModal,
  DeleteTodo,
  ChangeTodoStatus,
} from './types';
import {Todo} from '../reducers';
import { Dispatch } from 'redux';
import { getActionFromState } from '@react-navigation/native';
import { ADDRGETNETWORKPARAMS } from 'dns';
import { getAllTodos } from '../../../api';

export const ADD_TODO = 'ADD_TODO';
export const IS_MODAL_VISIBLE = 'IS_MODAL_VISIBLE';
export const CHANGE_CURRENT_TODO = 'CHANGE_CURRENT_TODO';
export const CHANGE_SHOW_TODO_MODAL = 'CHANGE_SHOW_TODO_MODAL';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';
export const SET_ALL_TODOS = 'SET_ALL_TODOS';

const actions = {
  addTodo(topic: string, description: string): AddTodo {
    return {
      type: ADD_TODO,
      payload: {
        topic,
        description,
        id: Date.now(),
        isCompleted: false,
      },
    };
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

  deleteTodo(id: number): DeleteTodo {
    return {
      type: DELETE_TODO,
      payload: id,
    };
  },

  changeTodoStatus(id: number): ChangeTodoStatus {
    return {
      type: CHANGE_TODO_STATUS,
      payload: id,
    };
  },

  setAllTodos : () => async (dispatch: Dispatch) => {
    try {
      const { data } = await getAllTodos();

      dispatch({
        type: SET_ALL_TODOS,
        payload: data.todos,
      });
    } catch(e) {
      console.log(e)
    }
  },
};

export default actions;
