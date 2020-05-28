import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import MyHeader from './components/MyHeader'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Doing your exercises", key: '1' },
    { text: "Writing your homework", key: '2' },
    { text: "Call to your friend", key: '3' },
    { text: "Operating System Architecture deadline", key: '4' },
    { text: "Development Technique deadline", key: '5' }
  ])

  const add = (todoText) => {
    if (todoText.replace(/\s+/g, '').length!==0) {
      let todo = { text: todoText, key: Math.random().toString() }
      setTodos((prevState) => [todo, ...prevState])
    }
    else{
      Alert.alert("Not Valid Text","Please give the valid text");
    }
  }

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((item) => item.key !== id))
  }

  return (
    <View style={styles.container}>

      <MyHeader />

      <AddTodo add={add} />

      <FlatList
        data={todos}
        keyExtractor={item => item.key.toString()}
        renderItem={({ item }) =>
          <Todo
            id={item.key}
            text={item.text}
            deleteTodo={deleteTodo}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatlist: {
    borderRadius: 20,
  }
});
