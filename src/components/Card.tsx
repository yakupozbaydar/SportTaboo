import { FlatList, ListView, ListViewBase, StyleSheet, Text, View } from 'react-native'
import React, { JSXElementConstructor } from 'react'
export type PersonProps={
  person:{
  id:number,
  name:string,
  tabus:Array<string>,
  }
}

const Card:React.FC<PersonProps> = ({person}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameView}>
        <Text style={styles.headerText}>{person.name}</Text>
      </View>
      <View style={styles.tabuView}>
        <FlatList renderItem={({ item }) => (<Text style={styles.tabuView}> {item} </Text>)} data={person.tabus} keyExtractor={item => item} />
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    width: 350,
    height: 600,
    marginBottom: 20,
    borderRadius: 80,
    alignItems: "center",
    backgroundColor: "#252525",
  },
  headerText: {
    borderColor: "red",
    fontSize: 30,
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
    justifyContent: "center",
    color: "white",
    fontSize: 22,
    alignItems: "center",
    margin: 10,
  }

})