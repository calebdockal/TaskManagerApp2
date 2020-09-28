import {createStore} from 'redux';
import {taskReducer} from '../reducers';

const configureStore = createStore(taskReducer);

export default configureStore;
