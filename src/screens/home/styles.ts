import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { StoriesInfo, PostInfo } from '../../dto'

export const HomeScreenContainer = styled(FlatList as new () => FlatList<PostInfo>)`
  background-color: #000;
  flex: 1;
`

export const StoriesContainer = styled(FlatList as new () => FlatList<StoriesInfo>)`
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #333;
  padding: 10px 0;
`

export const PostsContainer = styled.View``