import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { GameContext } from '../GameContext'
import GameResult from '../components/GameResult'
import { useNavigation } from '@react-navigation/native'

const ResultScreen = () => {
  const navigation = useNavigation()
  const context=useContext(GameContext)
  const takım1=context?.Score1
  const takım2=context?.Score2
  return (
    <View style={styles.container}>
      <View>
        <GameResult  teamName="Takım 1" teamScore={takım1} />
        <GameResult  teamName="Takım 2" teamScore={takım2} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeScreen")}>
        <Text style={styles.textHome}>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
  container:{
  backgroundColor: "#BA1F33",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  },
  button:{
    marginTop:30,
    width:150,
    height:80,
    backgroundColor:"#000501",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center"
  },
  textHome:{
    color:"white",
    fontSize:18,
  }

})