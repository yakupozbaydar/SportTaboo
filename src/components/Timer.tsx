import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Svg, { Circle } from 'react-native-svg'
import Animated, { createAnimatedPropAdapter, useAnimatedProps, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import { ReText } from 'react-native-redash'


const { width, height } = Dimensions.get("window")
const CIRCLE_LENGHT = 200
const R = CIRCLE_LENGHT / (2 * Math.PI)
const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const Timer = () => {
  
  const progress = useSharedValue(90)
  useEffect(() => {
    setInterval(() => {
      progress.value += -1
    },1000)
  }, [])
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGHT * (1-progress.value/90)
  }))
  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value)}`
  })
  return (
    <View style={styles.container}>
      <Svg>      
        <Circle cx={width/2} cy={height/1.27} r={R} stroke={"red"} strokeWidth={10} />
        <AnimatedCircle  cx={width/2} cy={height/1.27} r={R} stroke={"blue"} strokeWidth={5} strokeDasharray={CIRCLE_LENGHT}
          strokeDashoffset={CIRCLE_LENGHT}
          animatedProps={animatedProps}
          strokeLinecap={"square"}
        />
      </Svg>
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({
  container: {
    backgroundColor:"green"
  },
  progressText:{
    fontSize:28,
    color:"rgba(256,256,256,0.7)"
  }
})