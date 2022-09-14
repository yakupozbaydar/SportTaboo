import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CheckButton from '../components/CheckButton'
import XButton from '../components/XButton'
import ResetButton from '../components/ResetButton'
import Card from '../components/Card'
import GameScreen from './GameScreen'
import { GameContext } from '../GameContext'
import Countdown from '../components/Countdown'
import Score from '../components/Score'

export type GameProps = {
    Team: string,
    gameListId: number,
    GameCount: number,
}
const Game = ({ route }) => {
    const [time, setTime] = useState(90)
    const [timeStamp, setTimeStamp] = useState(true)

    const { gameList, Team, GameCount, indexes } = route.params;
    const [state, setstate] = useState(GameCount);
    const [cardList, setCardList] = useState(gameList);
    const [score, setScore] = useState(0);
    const [myindex, setMyIndex] = useState(indexes);
    const [myindex2, setMyIndex2] = useState(indexes);
    const context = useContext(GameContext);
    useEffect(() => {
        if (state == 1) {
            setstate(state + 1)
        }
        else { setstate(state + 1) }
    }, [])
    useEffect(() => {
        const interval = setInterval(() =>
            setTime(time - 1), 1000)
        if (time == 0) {
            setTimeStamp(false)
        }
        return () => {
            clearInterval(interval)
        };
    }, [time])
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
    if (cardList[0] != undefined && timeStamp == true) {
        return (
            <View style={styles.container}>
                <Countdown time={time} />
                <Card id={cardList[0].id} name={cardList[0].name} tabus={cardList[0].tabus} />
                <View style={styles.middleContainer}>
                    <Score score={score} />
                </View>
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
        backgroundColor: "#000501",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    bottomView: {
        flexDirection: "row",
    },
    middleContainer:{
        marginTop:-150,
        marginBottom:30,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    }
})