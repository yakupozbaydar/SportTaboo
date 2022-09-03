import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Game, { GameProps } from './Game'
import ResultScreen from './ResultScreen'


const PlayScreen = ({route}) => {
    const {Team,gameList,count} = route.params;
    const [state, setState] = useState(count)
    if(state==1){
    return (
    <Game Team={Team} gameList={gameList} />
    )}
  else{
    <ResultScreen/>
  }
}

export default PlayScreen