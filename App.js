import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {Provider} from 'react-redux';

import AddTask from './src/screens/AddTask';
import TaskList from './src/screens/TaskList';
import TaskInputModal from './src/screens/TaskInputModal';
import configureStore from './src/redux/store';
import {connect} from 'react-redux';

const App = () => {
  const [tasks, setTasks] = useState([{id: uuidv4(), text: 'Task 1'}]);

  // To edit tasks
  const [editState, editStateChange] = useState(false);

  // Capture info on edited items
  const [editTaskDetail, editTaskDetailChange] = useState({
    id: null,
    text: null,
  });

  const [checkedTasks, checkedTasksChange] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  // Save tasks
  const saveEditTask = (id, text) => {
    setItems((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === editTaskDetail.id ? {id, text: editTaskDetail.text} : task,
      );
    });
    editStateChange(!editState);
  };

  // capture text input
  const handleEditChange = (text) => {
    editTaskDetailChange({id: editTaskDetail.id, text});
  };
  // add task
  const addTask = () => {
    setIsModalVisible(true);
  };

  const insertNewTaskHandler = (task) => {
    /**
     * Here we capture the value typed into the text input box from the modal view
     */

    //print
    console.log('My new task is - ', task);

    //hide modal dialog
    setIsModalVisible(false);

    this.props.addTask({task: task});
  };

  const cancelNewTaskHandler = () => {
    //hide modal dialog
    setIsModalVisible(false);
  };

  // Edit item id capture
  const editTask = (id, text) => {
    editTaskDetailChange({id, text});
    return editStateChange(!editState);
  };

  // check task
  const taskChecked = (id, text) => {
    const isChecked = checkedTasks.filter(
      (checkedTask) => checkedTask.id === id,
    );
    isChecked.length
      ? checkedTasksChange((prevTasks) => {
          return [...prevTasks.filter((task) => task.id !== id)];
        })
      : checkedTasksChange((prevTasks) => {
          return [...prevTasks.filter((task) => task.id !== id), {id, text}];
        });
  };
  const store = configureStore;

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddTask onAddTask={addTask} />
        <FlatList
          data={tasks}
          renderItem={(item) => (
            <TaskList
              task={item}
              deleteTask={deleteTask}
              editTask={editTask}
              editTaskDetail={editTaskDetail}
              saveEditTask={saveEditTask}
              handleEditChange={handleEditChange}
              taskChecked={taskChecked}
              checkedTasks={checkedTasks}
            />
          )}
        />
        <TaskInputModal
          visible={isModalVisible}
          onInsertNewTask={insertNewTaskHandler}
          onCancelNewTask={cancelNewTaskHandler}
        />
      </View>
    </Provider>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: () => dispatch(addTask()),
    deleteTask: () => dispatch(deleteTask()),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
