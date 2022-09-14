import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
export type ButtonPress = {
  onPress: () => any,
}

const CheckButton:React.FC<ButtonPress> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.check}>
        <Ionicons name="checkmark-sharp" size={48} color="#000501" />
    </TouchableOpacity>
  )
}

export default CheckButton

const styles = StyleSheet.create({
    check:{
        margin:10,
        justifyContent:"center",
        alignItems:"center",
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:"green",
    }
})