import { Animated, ListRenderItem, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CheckButton from '../components/CheckButton'
import XButton from '../components/XButton'
import ResetButton from '../components/ResetButton'
import Card from '../components/Card'
import { List, List2 } from "../data"
import Timer from '../components/Timer'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { PersonProps } from '../components/Card'
import { BaseButton, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Home from './Home'
import GameScreen from './GameScreen'
import { GameContext} from '../GameContext'

export type GameProps = {
    Team: string,
    gameListId: number,
    GameCount: number,
}
const Game = ({ route}) => {
    const { gameList, Team, GameCount,indexes } = route.params;

    const [state, setstate] = useState(GameCount);
    const [cardList, setCardList] = useState(gameList);
    const [score, setScore] = useState(0);
    const [myindex, setMyIndex] = useState(indexes);
    const [myindex2, setMyIndex2] = useState(indexes);
    const context = useContext(GameContext)
    console.log("gameekran")
    console.log(cardList)
    useEffect(() => {
        if (state == 1) {
            setstate(state + 1)
        }
        else{setstate(state + 1)}
    }, [])
    const handleRight = () => {
        cardList.shift()
        setCardList(cardList)
        setScore(score + 1)
        setMyIndex(myindex + 1)
    }
    const handleLeft = () => {
        cardList.shift()
        setCardList(cardList)
        setMyIndex(myindex + 1)
    }
    const handlePass = () => {
        const replaced = cardList.shift()!
        cardList.push(replaced)
        setCardList(cardList)
        setMyIndex(myindex + 1)
        setMyIndex2(myindex2 + 1)
    }
    if (cardList[0] != undefined) {
        return (
            <View style={styles.container}>
                <Card id={cardList[0].id} name={cardList[0].name} tabus={cardList[0].tabus} />
                <Timer />
                <Text>{score}</Text>
                <View style={styles.bottomView}>
                    <ResetButton onPress={handlePass} />
                    <XButton onPress={handleLeft} />
                    <CheckButton onPress={handleRight} />
                </View>
            </View>
        )
    }
    else {
        return (
            <GameScreen score={score} anotherCount={state} setAnotherCount={setstate} />
        )
    }
}


export default Game

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#661B1C",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    bottomView: {
        flexDirection: "row"
    }
})