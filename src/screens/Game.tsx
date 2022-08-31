import { Animated, ListRenderItem, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
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

type GameProps = {
    Team:string,
    gameList:Array<PersonProps>,
}

const Game:React.FC<GameProps> = ({gameList,Team}) => {
    const [cardList,setCardList] = useState(gameList);
    const [score,setScore] = useState(0);
    const [myindex,setMyIndex] = useState(0);
    const [myindex2,setMyIndex2] = useState(0);

    const handleRight = () => {
        cardList.shift()
        setCardList(cardList)
        setScore(score+1)
        setMyIndex(myindex+1)
    }
    const handleLeft = () => {
        cardList.shift()
        setCardList(cardList)
        setMyIndex(myindex+1)
    }
    const handlePass = () => {
        const replaced=cardList.shift()!
        cardList.push(replaced)
        setCardList(cardList)
        setMyIndex2(myindex2+1)
    }
    if(myindex+myindex2<=6){
     return (
        <View style={styles.container}>
                <Card id={cardList[0].id} name={cardList[0].name} tabus={cardList[0].tabus}/>
            <Timer />
            <Text>{score}</Text>
            <View style={styles.bottomView}>
                <ResetButton onPress={handlePass} />
                <XButton onPress={handleLeft} />
                <CheckButton onPress={handleRight}/>
            </View>
        </View>
    )}
    else{
        return(
            <Home />
        )
    }
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