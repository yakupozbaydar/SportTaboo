import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Timer = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:"white"}}>Timer</Text>
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({
    container:{
        width:200,
        justifyContent:"center",
        alignItems:"center",
        height:70,
        borderRadius:20,
        backgroundColor: "#1B222C",
        marginTop:-80,
        margin:40,

    }
})