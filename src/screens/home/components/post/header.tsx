import React from 'react'
import { MoreVertical } from 'react-native-feather'
import { PostInfo } from '~/dto'
import {
  PostHeaderContainer, 
  PostHeaderUserContainer,
  PostHeaderUserImage,
  PostHeaderInfoContainer,
  PostHeaderInfoName,
  PostHeaderInfoLocation,
  PostHeaderRightContainer,
} from './styles'

type PostHeaderProps = {
  post: PostInfo
}

function PostHeader({ post }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <PostHeaderUserContainer colors={['#4f5bd5', '#962fbf','#d62976','#fa7e1e', '#feda75']}>
        <PostHeaderUserImage source={{ uri: post.user.image}}/>
      </PostHeaderUserContainer>
      <PostHeaderInfoContainer>
        <PostHeaderInfoName>
          {post.user.username}
        </PostHeaderInfoName>
        <PostHeaderInfoLocation>
          {post.location}
        </PostHeaderInfoLocation>
      </PostHeaderInfoContainer>
      <PostHeaderRightContainer>
        <MoreVertical color='#fff'/>
      </PostHeaderRightContainer>
    </PostHeaderContainer>
  )
}

export default PostHeader
