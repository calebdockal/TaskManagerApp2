import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const TaskList = ({
  task,
  deleteTask,
  editTask,
  isEditing,
  editTaskDetail,
  saveEditTask,
  handleEditChange,
  taskChecked,
  checkedTasks,
}) => {
  const checked = checkedTasks.filter(
    (checkedTask) => checkedTask.id === task.id,
  );
  return (
    <TouchableOpacity style={styles.listTask}>
      <View style={styles.listTaskView}>
        {isEditing && editTaskDetail.id === task.id ? (
          <TextInput
            placeholder="Edit Task..."
            style={styles.editTaskInput}
            onChangeText={handleEditChange}
          />
        ) : (
          <Text
            onPress={() => taskChecked(item.id, item.text)}
            style={
              checked.length ? styles.checkedTaskText : styles.listTaskText
            }>
            {task.text}
          </Text>
        )}
        <View style={styles.iconView}>
          {isEditing && editTaskDetail.id === task.id ? (
            <Icon
              name="save"
              size={20}
              color="green"
              onPress={() => saveEditTask(task.id, task.text)}
            />
          ) : (
            !checked.length && (
              <Icon
                name="pencil"
                size={20}
                color="blue"
                onPress={() => editItem(item.id, item.text)}
              />
            )
          )}
          <Icon
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteTask(task.id)}
          />
        </View>
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
  checkedTaskText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'green',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 70,
  },
  editTaskInput: {
    padding: 0,
    fontSize: 18,
  },
});

export default TaskList;
