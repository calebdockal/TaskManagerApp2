import React, {useState} from 'react';
import {View, StyleSheet, Flatlist, Alert} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import AddTask from './src/screens/AddTask';
import TaskList from './src/screens/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([{id: uuidv4(), text: 'Task 1'}]);

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id != id);
    });
  };
  const addTask = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter a task', {text: 'Ok'});
    } else {
      setTask((prevTask) => {
        return [{id: uuid(), text}, ...prevTask];
      });
    }
  };

  return (
    <View style={styles.container}>
      <AddTask addTask={addTask} />
      <Flatlist
        data={tasks}
        renderItem={({task}) => (
          <TaskList item={task} deleteTask={deleteTask} />
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
