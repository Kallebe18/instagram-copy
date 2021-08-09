import React, { useEffect, useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

interface IndicatorProps {
  dotIndex: number;
  current: number;
}

export function IndicatorDot({ dotIndex, current }: IndicatorProps) {
  const dotScale = useSharedValue(0.5)
  const [dotColor, setDotColor] = useState('#777')
  const dotStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: dotScale.value }]
    }
  }, [])

  useEffect(() => {
    if (current === dotIndex) {
      dotScale.value = withTiming(1)
      setDotColor('#4c79a7')
    } else {
      dotScale.value = withTiming(0.5)
      setDotColor('#777')
    }
  }, [current])

  return (
    <Animated.View
      style={[{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: dotColor,
      }, dotStyle ]}
    />
  )
}
