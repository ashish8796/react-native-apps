export const ADD_TODO = 'ADD_TODO';
export const IS_MODAL_VISIBLE = 'IS_MODAL_VISIBLE';
export const CHANGE_CURRENT_TODO = 'CHANGE_CURRENT_TODO';
export const CHANGE_SHOW_TODO_MODAL = 'CHANGE_SHOW_TODO_MODAL';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';

const actions = {
  addTodo(topic, description) {
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

  changeModalVisibility(isModalVisible) {
    return {
      type: IS_MODAL_VISIBLE,
      payload: isModalVisible,
    };
  },

  changeCurrentTodo(todo) {
    return {
      type: CHANGE_CURRENT_TODO,
      payload: todo,
    };
  },

  changeShowTodoModal(showTodoModal) {
    return {
      type: CHANGE_SHOW_TODO_MODAL,
      payload: showTodoModal,
    };
  },

  deleteTodo(id) {
    return {
      type: DELETE_TODO,
      payload: id,
    };
  },

  changeTodoStatus(id) {
    return {
      type: CHANGE_TODO_STATUS,
      payload: id,
    };
  },
};

export default actions;
