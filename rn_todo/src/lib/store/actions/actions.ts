export const ADD_TODO = 'ADD_TODO';

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
};

export default actions;
