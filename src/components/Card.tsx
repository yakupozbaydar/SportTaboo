import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
export type PersonProps={
  id:number | undefined,
  name:string | undefined,
  tabus:Array<string> | undefined,
}
import { width,height } from './Timer'

const Card:React.FC<PersonProps> = (person) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameView}>
        <Text style={styles.headerText}>{person.name}</Text>
      </View>
      <View style={styles.tabuView}>
        <FlatList renderItem={({ item }) => (<Text style={styles.tabuText}> {item} </Text>)} data={person.tabus} keyExtractor={item => item} />
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    marginBottom:200,
    width: 350,
    height: 450,
    borderRadius: 70,
    backgroundColor: "#BA1F33",
  },
  headerText: {
    borderColor: "red",
    fontSize: 34,
    color: "white",
    borderRadius: 50,
    fontWeight: "700",

  },
  nameView: {
    alignItems: "center",
    marginTop: 30,
  },
  tabuView: {
    marginTop: 20,
    color: "white",
    fontSize: 26,
  },
  tabuText: {
    alignSelf:"center",
    marginTop: 20,
    color: "white",
    fontSize: 26,
    margin: 10,
  } ,

})