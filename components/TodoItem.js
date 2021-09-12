import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({item,DeleteTodo}) {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={()=> DeleteTodo(item.key)}>
                <MaterialIcons name= "delete" size={18} color='coral' />
            </TouchableOpacity>
            <Text style={styles.itemText} >{item.text}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'coral',
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 1,
        borderRadius: 10,
        flexDirection:'row'
      },
      itemText:{
          marginLeft:10,

      }
})