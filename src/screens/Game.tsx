import { Animated, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CheckButton from '../components/CheckButton'
import XButton from '../components/XButton'
import ResetButton from '../components/ResetButton'
import Card from '../components/Card'
import { List, List2 } from "../data"
import Timer from '../components/Timer'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { PersonProps } from '../components/Card'

type GameProps = {
    Team:string,
    gameList:Array<PersonProps>,
}

const Game:React.FC<GameProps> = ({gameList,Team}) => {

    const [cardList,setCardList] = useState(gameList);
    const [score,setScore] = useState(0);
    const [myindex,setMyIndex] = useState(0);

    const handleRight = () => {
        setScore(score+1);
        setMyIndex(myindex+1);
    }
    const handleLeft = () => {
        //set score -1
    }
    const handlePass = () => {
        //set card list as current card replaced to the end of the array
    }
     return (
        <View style={styles.container}>
            <Swipeable >
                <Card id={cardList[myindex].id} name={cardList[myindex].name} tabus={cardList[myindex].tabus}/>
            </Swipeable>
            <Timer />
            <View style={styles.bottomView}>
                <ResetButton onPress={() => handlePass} />
                <XButton onPress={() => handleLeft} />
                <CheckButton onPress={() => handleRight} />
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