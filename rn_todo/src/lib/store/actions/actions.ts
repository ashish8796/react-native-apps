export const ADD_TODO = 'ADD_TODO';
export const IS_MODAL_VISIBLE = 'IS_MODAL_VISIBLE';

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
};

export default actions;
