import React, { useState } from 'react'
import { Dimensions, View, ViewToken } from 'react-native'
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
    <TapGestureHandler
    numberOfTaps={2}
    onActivated={handleLike}
  >
    <View style={{width: '100%'}}>

        <PostContentContainer>
          <Carrousel 
            setCurrentImage={handleSetCurrentImage}
            images={images}
          />
          <Animated.View style={[{ 
              position: 'absolute',
              elevation: 1,
            }, animatedHeartStyle
          ]}>
            <Heart
              fill='#fff'
              width={'100%'}
              height={'100%'}
            />
          </Animated.View>
        </PostContentContainer>
      <PostContentIndicatorsContainer>
        {renderIndicators()}
      </PostContentIndicatorsContainer>
    </View>
    </TapGestureHandler>
  )
}

export default PostContent
