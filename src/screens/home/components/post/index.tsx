import React, { useState } from 'react'
import { ViewProps } from 'react-native'
import {
  useAnimatedStyle, 
  useSharedValue, 
  withDelay, 
  withSpring, 
  withTiming
} from 'react-native-reanimated'

import { PostContainer } from './styles'
import { PostInfo } from '../../../../dto'

import PostHeader from './header'
import PostContent from './content'
import PostFooter from './footer'

interface PostProps extends ViewProps {
  post: PostInfo
}


function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(false)

  const footerHeartScale = useSharedValue(1)
  const contentHeartScale = useSharedValue(0)

  const contentHeartStyle = useAnimatedStyle(() => ({
    transform: [{ scale: contentHeartScale.value }]
  }), [])
  const footerHeartStyle = useAnimatedStyle(() => ({
    transform: [{ scale: footerHeartScale.value }]
  }), [])

  const handleLike = () => {
    setLiked(true)
    contentHeartScale.value = withSpring(0.8, {
      velocity: 5
    }, (isFinished) => {
      if (isFinished) {
        contentHeartScale.value = withDelay(200, withTiming(0));
      }
    });

    footerHeartScale.value = withSpring(0.9, {
      velocity: 5
    }, (isFinished) => {
      if (isFinished) {
        footerHeartScale.value = withSpring(1, {
          velocity: 6
        });
      }
    });
  }

  const handleFooterLike = () => {
    setLiked(!liked)
  }

  return (
    <PostContainer>
      {/* HEADER */}
      <PostHeader post={post}/>
      {/* CONTENT */}
      <PostContent
        animatedHeartStyle={contentHeartStyle} 
        images={post.images} 
        handleLike={handleLike}
      />
      {/* FOOTER */}
      <PostFooter
        liked={liked}
        post={post}
        handleFooterLike={handleFooterLike}
        animatedHeartStyle={footerHeartStyle}
      />
    </PostContainer>
  )
}

export default Post
