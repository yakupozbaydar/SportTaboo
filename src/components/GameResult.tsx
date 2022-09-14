import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type GameResultProps = {
    teamName:string,
    teamScore:number,
}
const GameResult:React.FC<GameResultProps> = ({teamName,teamScore}) => {
    return (
        <View style={styles.container}>
            <View style={styles.teamHeader}>
                <Text style={{fontSize:22,color:"white"}}>
                     {teamName}
                </Text>
            </View>
            <View style={styles.resultView}>
                <Text style={{fontSize:32,color:"white"}}>{teamScore}</Text>
            </View>
        </View>
    )
}

export default GameResult

const styles = StyleSheet.create({
    container:{
        margin:30,
        backgroundColor: "#000501",
        width:250,
        height:250,
        borderRadius:70,
        alignItems:"center",
        alignSelf:"center",
        
    },
    teamHeader:{
        margin:20,

    },
    resultView:{
        justifyContent:"center",
        marginTop:50,
    },
})