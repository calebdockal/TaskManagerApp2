import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import AddTask from './src/screens/AddTask';
import TaskList from './src/screens/TaskList';

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
  const addTask = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter a task', {text: 'Ok'});
    } else {
      setTasks((prevTasks) => {
        return [{id: uuid(), text}, ...prevTasks];
      });
    }
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

  return (
    <View style={styles.container}>
      <AddTask addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({item}) => (
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});

export default App;
