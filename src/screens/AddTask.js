import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// const AddTask = ({addTask}) => {
//   const [text, setText] = useState('');
//   const onChange = (textValue) => setText(textValue);

const AddTask = (props) => {

  const onAddTaskHandler = () => {
    /**
     * Remember, prop is a bidirectional type of thing.
     * 1 - You use it to send immutable data to the child component (e.g., this component)
     * 2 - Prop can be used to talk to the parent component, too, usually by means of callback functions
     * 
     * Here we call a method on the parent, which is supplied through a prop called "onAddTask" 
     * 
     * Tip: You need to have a very good grasp of the concept of props because this pattern you'll encounter everyday  
     */

    props.onAddTask();
  }

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
    //borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: '#c2bad8',
    //padding: 9,
    //margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 10,
  },
});

export default AddTask;
