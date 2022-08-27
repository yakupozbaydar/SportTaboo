import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckButton from '../components/CheckButton'
import XButton from '../components/XButton'
import ResetButton from '../components/ResetButton'
import Card from '../components/Card'
import {List} from "../data"

const Game = () => {
    return (
        <View style={styles.container}>
                <View>
                    <Card person={List[0]} />
                </View>
                <View style={styles.bottomView}>
                    <ResetButton />
                    <XButton />
                    <CheckButton/>
                </View>
            </View>
    )
}

export default Game

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#AF0404",
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
    },
    bottomView:{
        flexDirection:"row"
    }
})