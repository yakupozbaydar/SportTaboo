import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Countdown from '../components/Countdown';

const Home:React.FC = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.button} onPress={() => {navigation.push("GameScreen")}}>
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
    backgroundColor:"#BA1F33",
  },
  button:{
    alignItems:"center",
    justifyContent:"center",
    width:175,
    height:100,
    borderRadius:50,
    backgroundColor:"#000501"
  },
  text:{
    fontSize:18,
    fontWeight:"500",
    color:"white"
  }
})