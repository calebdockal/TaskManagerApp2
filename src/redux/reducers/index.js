import {ADD_TASK, DELETE_TASK} from '../actions/actionTypes';

export const taskReducer = (task, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        task: task,
      };
    case DELETE_TASK:
      const task = action.payload;
      return {
        ...state,
        tasks: tasks.filter(tasks.id !== task.id),
      };
  }
};
