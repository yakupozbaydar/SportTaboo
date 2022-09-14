import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


type CountdownProps = {
    time: number,
}

const Countdown: React.FC<CountdownProps> = ({ time }) => {
    return (
        <View style={styles.containerCountdown}>
            <Ionicons name='timer-outline' size={32} color="#000501">
                <Text style={styles.textCountdown}>{time}</Text>
            </Ionicons>  
      </View>
    )

}

export default Countdown

const styles = StyleSheet.create({
    containerCountdown: {
        width: 130,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BA1F33",
        borderRadius: 30,
    },
    textCountdown: {
        fontSize: 24,
        color: "white"
    }
})