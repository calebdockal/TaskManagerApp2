import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddTask = (props) => {
  const onAddTaskHandler = () => {
    props.onAddTask();
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={onAddTaskHandler}>
      <View style={styles.input}>
        <Icon name="plus" size={20} />
        <Text style={styles.btnText}>Add Task</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#c2bad8',
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 10,
  },
});

export default AddTask;
