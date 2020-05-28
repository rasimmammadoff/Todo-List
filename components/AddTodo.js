import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function AddTodo({ add }) {
    const [text, setText] = useState("")
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Todo"
                onChange={(val) => setText(val.nativeEvent.text)}
            />

            <TouchableOpacity>
                <Text style={styles.button} onPress={() => add(text)}>Add</Text>
            </TouchableOpacity>
            
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width:"80%",
        marginTop: "5%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    input: {
        borderColor: "#000",
        borderWidth: 2,
        padding: 10,
        borderRadius: 15,
    },
    button: {
        color:"#fff",
        width:"40%",
        padding:10,
        borderRadius:10,
        fontSize:20,
        marginTop: "5%",
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:"5%",
        textAlign:"center",
        backgroundColor: "#123",
    }
})