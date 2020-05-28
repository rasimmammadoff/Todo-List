import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function MyHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Todo List</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: "#024",
  },

  text: {
    fontSize:35,
    textAlign:'center',
    color: '#fff',
  }
})