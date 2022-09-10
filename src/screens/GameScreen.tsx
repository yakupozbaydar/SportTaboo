import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Game from './Game'
import { List, List2 } from '../data'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { GameContext } from '../GameContext'
import Home from './Home'
import ResultScreen from './ResultScreen'
type GameScreenProps = {
  anotherCount: number,
  score: number,
  setAnotherCount: React.Dispatch<any>,
}
function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
const GameScreen: React.FC<GameScreenProps> = ({ anotherCount, score, setAnotherCount }) => {
  useFocusEffect(useCallback(
    () => {
      if(anotherCount != undefined){
        return
      }
      else{

      }
    },
    [],
  ))
  const gameList1 = getMultipleRandom(List, 6)
  const gameList2 = getMultipleRandom(List, 6)
  const context = useContext(GameContext)
  const navigation = useNavigation()
  console.log("oyunekran")
  if (anotherCount == undefined) {
    console.log("oyunekran1")

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>
          İlk Oyun hazır
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push("Game", {
          Team: "Takımım",
          gameList: gameList1,
          GameCount: 0,
          indexes: 0
        })}>
          <Text style={{ fontSize: 22, alignSelf: "center" }}>
            BAŞLA
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  else if (anotherCount == 1) {
    useEffect(() => {
      context?.setScore1(score)
    }, [])
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>
          İkinci Oyun hazır
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push("Game", {
          Team: "Takımım2",
          gameList: gameList2,
          GameCount: anotherCount,
          indexes: 0
        })}>
          <Text style={{ fontSize: 22, alignSelf: "center" }}>
            BAŞLA
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  else {
    useEffect(() => {
      context?.setScore2(score)
    }, [])
    return (
      <ResultScreen />
    )
  }
}
export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#661B1C",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#1B222C",
    width: 200,
    height: 200,
    borderRadius: 50,


  }
})