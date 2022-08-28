import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckButton from '../components/CheckButton'
import XButton from '../components/XButton'
import ResetButton from '../components/ResetButton'
import Card from '../components/Card'
import { List } from "../data"
import Timer from '../components/Timer'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler'

const Game = () => {
    return (
        <View style={styles.container}>
            <View>
                <Swipeable > 
                    <Card person={List.filter(item => item.id == 1)[0]} />
                    <Card person={List.filter(item => item.id == 2)[0]} />
                    <Card person={List.filter(item => item.id == 3)[0]} />
                    <Card person={List.filter(item => item.id == 4)[0]} />
                    <Card person={List.filter(item => item.id == 5)[0]} />
                </Swipeable>
            </View>
            <Timer />
            <View style={styles.bottomView}>
                <ResetButton />
                <XButton />
                <CheckButton />
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
        justifyContent: "center",
    },
    bottomView: {
        flexDirection: "row"
    }
})