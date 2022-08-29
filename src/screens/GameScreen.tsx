import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Game from './Game'
import { List } from '../data'

const GameScreen = () => {
  return (
    <Game Team='Team1' gameList={List} />
  )
}

export default GameScreen

const styles = StyleSheet.create({})