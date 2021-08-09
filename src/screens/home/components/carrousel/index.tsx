import React from 'react'
import {
  Dimensions,
  FlatList,
  ViewToken,
} from 'react-native'
import { PostContentImage } from '../post/styles'

interface CarrouselProps {
  images: string[];
  setCurrentImage: (
    { viewableItems }: { viewableItems: ViewToken[]; }
  ) => void
}

function Carrousel({ images, setCurrentImage }: CarrouselProps ) {
  const onViewRef = React.useRef(setCurrentImage)
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 90 })

  return (
    <FlatList
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
      data={images}
      pagingEnabled={true}
      keyExtractor={(_, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <PostContentImage
            resizeMode={'cover'} 
            style={{
              width: Dimensions.get('screen').width,
              margin: 0,
              aspectRatio: 1,
            }}
            source={{ uri: item }}
          />
        )
      }}    
    />
  )
}

export default Carrousel
