import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


type CountdownProps = {
    time: number,
}

const Countdown: React.FC<CountdownProps> = ({ time }) => {
    return (
        <View style={styles.containerCountdown}>
            <Ionicons style={styles.iconStyle} name='timer-outline' size={32} color="#000501"/>
                <Text style={styles.textCountdown}>{time}</Text>
      </View>
    )

}

export default Countdown

const styles = StyleSheet.create({
    containerCountdown: {
        width: 130,
        height: 70,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#BA1F33",
        borderRadius: 30,
        flexDirection:"row",
    },
    textCountdown: {
        fontSize: 24,
        color: "white"
    },
    iconStyle:{
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    }
})