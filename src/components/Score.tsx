import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ScoreProps = {
    score:number,
}

const Score:React.FC<ScoreProps> = ({score}) => {
  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.scoreText}>{score}</Text>
    </View>
  )
}

export default Score

const styles = StyleSheet.create({
    scoreContainer:{
        width:120,
        height:80,
        backgroundColor:"#BA1F33",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
    },
    scoreText:{
        fontSize:26,
        color:"white"
    }
})