import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function Todo(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.text}
            </Text>
            <MaterialIcons  
                onPress={() => props.deleteTodo(props.id)} 
                style={styles.icon} name='delete' size={20} 
                color="#fff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: "#248",
        alignItems: "center",
        marginBottom: 5,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 10,
    },
    text: {
        color: "#fff",
    },
    icon: {
        position: "absolute",
        right: 10,
    }
})