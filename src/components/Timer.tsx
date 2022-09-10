import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Svg, { Circle } from 'react-native-svg'
import Animated, { createAnimatedPropAdapter, useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated'


const { width,height} = Dimensions.get("window")
const CIRCLE_LENGHT = 500
const R=CIRCLE_LENGHT/ (2*Math.PI)
const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const Timer = () => {
  const progress = useSharedValue(0)
  useEffect(() => {
    progress.value= withTiming(1,{duration:2000})
  }, [])
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset:CIRCLE_LENGHT*(1-progress.value)
  }))
  return (
    <View style={styles.container}>
        <Text>100</Text>
      <Svg style={{position:"absolute"}}>
        <Circle cx={width/2} cy={width/2} r={R} stroke={"white"} strokeWidth={30}/>
        <AnimatedCircle cx={width/2} cy={width/2} r={R} stroke={"blue"} strokeWidth={15} strokeDasharray = {CIRCLE_LENGHT}
        strokeDashoffset={CIRCLE_LENGHT}
        animatedProps={animatedProps}
        strokeLinecap={"round"}
          />
      </Svg>
      </View>
  )
}

export default Timer

const styles = StyleSheet.create({
    container:{
        width:200,
        justifyContent:"center",
        alignItems:"center",
        height:70,
        borderRadius:20,
        backgroundColor: "#1B222C",
        marginTop:-80,
        margin:40,

    }
})