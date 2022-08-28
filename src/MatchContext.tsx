import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

export type PersonProps={
    person:{
    id:number,
    name:string,
    tabus:Array<string>,
    }
  }

type MatchProps = {
    Team1:{
        Game1Array:Array<PersonProps["person"]>,
        Game2Array:Array<PersonProps["person"]>,
        Game3Array:Array<PersonProps["person"]>,
        score:number,
    },
    Team2:{
        Game1Array:Array<PersonProps["person"]>,
        Game2Array:Array<PersonProps["person"]>,
        Game3Array:Array<PersonProps["person"]>,
        score:number,
    },
}

const [Team1Game1Array, setTeam1Game1Array] = useState(null);
const [Team1Game2Array, setTeam1Game2Array] = useState(null);
const [Team1Game3Array, setTeam1Game3Array] = useState(null);
const [Team1Score, setTeam1Score] = useState(null);

const [Team2Game1Array, setTeam2Game1Array] = useState(null);
const [Team2Game2Array, setTeam2Game2Array] = useState(null);
const [Team2Game3Array, setTeam2Game3Array] = useState(null);
const [Team2Score, setTeam2Score] = useState(null);



const MatchContext = createContext<MatchProps>();


export default MatchContext

