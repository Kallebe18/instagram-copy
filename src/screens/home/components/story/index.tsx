import React from 'react'
import { ViewProps, StyleSheet, Pressable } from 'react-native'

import {
  StoryImageContainer,
  StoryImage,
  StoryText,
  StoryPressableContainer
} from './styles'

import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated'

interface StoryProps extends ViewProps {
  imageUri: string;
  username: string;
}

function Story ({ imageUri, username }: StoryProps) {
  const storyScale = useSharedValue(1)

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: storyScale.value }]
    }
  }, [])

  const handleStoryAnimationPressIn = () => {
    storyScale.value = withTiming(0.9)
  }

  const handleStoryAnimationPressOut = () => {
    storyScale.value = withTiming(1)
  }

  return (
    <StoryPressableContainer 
      onPressIn={handleStoryAnimationPressIn}
      onPressOut={handleStoryAnimationPressOut}
    >
      <Animated.View style={[ reanimatedStyle]}>
        <StoryImageContainer colors={['#4f5bd5', '#962fbf','#d62976','#fa7e1e', '#feda75']}>
          <StoryImage source={{uri: imageUri}}/>
        </StoryImageContainer>
      </Animated.View>
      <StoryText numberOfLines={1}>{username}</StoryText>
    </StoryPressableContainer>
  )
}

export default Story