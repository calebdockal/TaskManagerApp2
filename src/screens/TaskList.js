import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const TaskList = ({task, deleteTask}) => {
  return (
    <TouchableOpacity style={styles.listTask}>
      <View style={styles.listTaskView}>
        <Text style={styles.listTaskText}>{task.text}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteTask(task.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listTask: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listTaskView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTaskText: {
    fontSize: 18,
  },
});

export default TaskList;
