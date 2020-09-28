import {ADD_TASK, DELETE_TASK} from '../actions/actionTypes';

const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      const task = action.payload;
      return {
        ...state,
        tasks: tasks.filter((tasks) => tasks !== tasks.id),
      };
    default:
      return state;
  }
};
