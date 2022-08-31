import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { List } from '../data';
const Home:React.FC = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.button} onPress={() => {navigation.navigate("GameScreen")}}>
          <Text style={styles.text}>OYNA</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#252525",
  },
  button:{
    alignItems:"center",
    justifyContent:"center",
    width:175,
    height:100,
    borderRadius:50,
    backgroundColor:"#FF0000"
  },
  text:{
    fontSize:18,
    fontWeight:"500",
  }
})