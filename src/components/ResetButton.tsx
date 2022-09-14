import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ButtonPress } from './CheckButton';

const ResetButton:React.FC<ButtonPress> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.check}>
        <Ionicons name="refresh-sharp" size={48} color="#000501" />
    </TouchableOpacity>
  )
}

export default ResetButton

const styles = StyleSheet.create({
    check:{
        margin:10,
        justifyContent:"center",
        alignItems:"center",
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:"#A1B0AB",
    }
})