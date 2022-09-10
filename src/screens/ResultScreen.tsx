import { DevSettings, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { GameContext } from '../GameContext'
import ResetButton from '../components/ResetButton'
import GameResult from '../components/GameResult'
import { useNavigation } from '@react-navigation/native'
import Home from './Home'

const ResultScreen = () => {
  const navigation = useNavigation()
  const context=useContext(GameContext)
  const takım1=context?.Score1
  const takım2=context?.Score2
  return (
    <View style={styles.container}>
      <View>
        <GameResult  teamName="Takımım" teamScore={takım1} />
        <GameResult  teamName="Takımım" teamScore={takım2} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Text>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
  container:{
  backgroundColor: "#661B1C",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  },

})