import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const XButton = () => {
  return (
    <TouchableOpacity style={styles.check}>
        <Ionicons name="close" size={48} color="#252525" />
    </TouchableOpacity>
  )
}

export default XButton

const styles = StyleSheet.create({
    check:{
        margin:10,
        justifyContent:"center",
        alignItems:"center",
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:"#FF0000",
    }
})