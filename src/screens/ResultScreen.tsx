import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ResultScreen</Text>
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