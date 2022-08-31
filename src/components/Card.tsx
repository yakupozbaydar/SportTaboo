import { FlatList, ListView, ListViewBase, StyleSheet, Text, View } from 'react-native'
import React, { JSXElementConstructor } from 'react'
export type PersonProps={
  id:number | undefined,
  name:string | undefined,
  tabus:Array<string> | undefined,
}

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
    marginTop: 60,
    width: 350,
    height: 500,
    marginBottom: 140,
    borderRadius: 70,
    backgroundColor: "#252525",
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