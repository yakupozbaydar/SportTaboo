import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Game from './Game'
import { List, List2 } from '../data'
import { useNavigation } from '@react-navigation/native'
import PlayScreen from './PlayScreen'

const GameScreen = () => {
  var state=0;
  const navigation = useNavigation()
  if(state==0){
  return (
    <View style={styles.container}>
      <Text style={{fontSize:18}}>
        İlk takım oyunu hazır
      </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PlayScreen",{
      Team:"Takımım",
      gameList:List,
      count:1
    })}>
      <Text style={{fontSize:22,alignSelf:"center"}}>
        BAŞLA
      </Text>
    </TouchableOpacity>
    </View>
  )}
  else{
    return(
      <View style={styles.container}>
      <Text style={{fontSize:18}}>
        İkinci takım oyunu hazır
      </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PlayScreen",{
      Team:"Takımım2",
      gameList:List2
    })}>
      <Text style={{fontSize:22,alignSelf:"center"}}>
        BAŞLA
      </Text>
    </TouchableOpacity>
    </View>
    )
  }
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#661B1C",
    justifyContent: "center",
    alignItems:"center"
  },
  button: {
    justifyContent:"center",
    backgroundColor: "#1B222C",
    width: 200,
    height: 200,
    borderRadius: 50,


  }
})