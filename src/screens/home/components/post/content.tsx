import React, { useState } from 'react'
import { View, ViewToken } from 'react-native'
import { Heart } from 'react-native-feather'
import { TapGestureHandler } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import Carrousel from '../carrousel'
import { IndicatorDot } from './indicator'
import { PostContentContainer, PostContentIndicatorsContainer } from './styles'

interface PostContentProps {
  images: string[],
  handleLike: () => void,
  animatedHeartStyle: {
    transform: {
        scale: number;
    }[];
  }
}

interface SetCurrentImageParams {
  viewableItems: ViewToken[]
}

function PostContent({ 
    images,
    handleLike,
    animatedHeartStyle
  }: PostContentProps) {
  const [currentImageIndex, setCurrentImage] = useState(0)

  const renderIndicators = () => {
    const indicators = []
    for (let i=0; i<images.length; i++) {
      indicators.push(
        <IndicatorDot key={i} dotIndex={i} current={currentImageIndex}/>
      )
    }
    return indicators
  }

  const handleSetCurrentImage = (
    { viewableItems }: SetCurrentImageParams
  ) => {
    if(viewableItems.length > 0 && viewableItems[0].index !== null) {
      setCurrentImage(viewableItems[0].index)
    }
    // Use viewable items in state or as intended
  }

  return (
    <View>
      <TapGestureHandler
        numberOfTaps={2}
        onActivated={handleLike}
      >
        <PostContentContainer>
          <Carrousel 
            setCurrentImage={handleSetCurrentImage}
            images={images}
          />
          <Animated.View style={[{ 
              position: 'absolute' 
            }, animatedHeartStyle
          ]}>
            <Heart
              fill='#fff'
              height={120} 
              width={120}
            />
          </Animated.View>
        </PostContentContainer>
      </TapGestureHandler>
      <PostContentIndicatorsContainer>
        {renderIndicators()}
      </PostContentIndicatorsContainer>
    </View>
  )
}

export default PostContent
