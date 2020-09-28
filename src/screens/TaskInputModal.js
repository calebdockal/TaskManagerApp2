import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {addTask, deleteTask} from '../redux/actions/actions';
import {connect} from 'react-redux';

const TaskInputModal = (props) => {
  const [task, setTask] = useState('');

  return (
    <Modal
      style={styles.container}
      visible={props.visible}
      animationType="fade"
      transparent={true}>
      <View style={styles.view}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          autoFocus={true}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.addTask({task: task});
            console.log(this.props.state);
          }}>
          <Text style={styles.text}>Add Task</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.onCancelNewTask()}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 20,
  },
  button: {
    height: 60,
    width: 200,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    height: 100,
    width: 200,
  },
});

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
export default connect(mapStateToProps, mapDispatchToProps)(TaskInputModal);
