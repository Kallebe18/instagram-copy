import React, { 
  useCallback, 
  useState 
} from 'react'
import { Image, NativeSyntheticEvent, Pressable, Text, TextLayoutEventData, View } from 'react-native'
import { Bookmark, Heart, MessageCircle, Send } from 'react-native-feather'
import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

import { PostInfo } from '~/dto'

import {
  PostFooterFeedbackContainer,
  PostFooterDescriptionContainer,
  PostFooterDescriptionUsername,
  PostFooterDescription,
  PostFooterShowMoreButton,
  PostFooterShowMoreText,
  PostFooterLikedByContainer,
  PostFooterContainer,
  PostFooterButtonsContainer,
  PostFooterLeftButtonsContainer,
  PostFooterRightButtonsContainer
} from './styles'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '~/routes'

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Comments'
>;

type PostFooterProps = {
  post: PostInfo,
  liked: boolean,
  handleFooterLike: () => void,
  animatedHeartStyle: {
    transform: {
        scale: number;
    }[];
  }
}

function PostFooter({ 
    post, 
    animatedHeartStyle,
    handleFooterLike,
    liked
  }: PostFooterProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const [descriptionLines, setDescriptionLines] = useState(2)
  const [descriptionMaxLines, setDescriptionMaxLines] = useState(0)

  // checks if description text has more than 2 lines
  // that way we need to display the 'more' button
  const handleDescriptionTextLayout = useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
      setDescriptionMaxLines(e.nativeEvent.lines.length)
  }, [])

  const handleShowComments = useCallback(() => {
    navigation.navigate("Comments", { 
      comments: post.comments
    })
  }, [])

  const handleShowMoreButton = useCallback(() => {
    setDescriptionLines(descriptionMaxLines)
  }, [])

  return (
    <PostFooterContainer>
        <PostFooterButtonsContainer>
          <PostFooterLeftButtonsContainer>
            <Pressable onPress={handleFooterLike}>
              <Animated.View style={[{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15
              }, animatedHeartStyle]}>
                <Heart 
                  color={liked ? '#fb3958' : '#fff'} 
                  fill={liked ? '#fb3958' : undefined}
                  height={25}
                  width={25}
                />
              </Animated.View>
            </Pressable>
            <MessageCircle 
              style={{ marginRight: 15}}
              color='#fff' rotation={270}
              height={25}
              width={25}/>
            <Send 
              style={{ marginRight: 15}} 
              color='#fff'
              height={25}
              width={25}/>
          </PostFooterLeftButtonsContainer>
          <PostFooterRightButtonsContainer>
            <Bookmark color='#fff'/>
          </PostFooterRightButtonsContainer>
        </PostFooterButtonsContainer>

        <PostFooterFeedbackContainer>
          <PostFooterLikedByContainer>            
          {
            post.likes && 
            post.likes.length > 0 &&
            <View style={{display: 'flex', flexDirection: 'row'}}>
              {
                <Image source={{
                  uri: post.likes[0].user.image
                }} style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  marginRight: 8,
                }}>
                </Image>
              }
              <Text style={{color: '#fff'}}>
                Liked by <Text style={{ color: '#fff', fontWeight: 'bold'}}>
                  { post.likes[0].user.username}
                </Text>
              </Text>
              {
                post.likes.length > 1 &&
                <Text style={{ color: '#fff'}}> and 
                  <Text style={{fontWeight: 'bold'}}> {post.likes.length-1}
                  </Text> others
                </Text>
              }
            </View>          
          }
          </PostFooterLikedByContainer>
          <PostFooterDescriptionContainer
            onTextLayout={handleDescriptionTextLayout}
            numberOfLines={descriptionLines}
          >
            <PostFooterDescriptionUsername>{post.user.username} </PostFooterDescriptionUsername>
            <PostFooterDescription>{post.description}</PostFooterDescription>
          </PostFooterDescriptionContainer>
          {
            descriptionMaxLines > 2 && descriptionLines === 2 &&
            <PostFooterShowMoreButton onPressOut={handleShowMoreButton}>
              <PostFooterShowMoreText>
                more
              </PostFooterShowMoreText>
            </PostFooterShowMoreButton>
          }
          {
            post.comments &&
            post.comments.length > 0 && 
            <>
              {
                post.comments.length > 1 &&
                <PostFooterShowMoreButton onPressOut={handleShowComments}>
                  <PostFooterShowMoreText>
                    View all {post.comments.length} comments
                  </PostFooterShowMoreText>
                </PostFooterShowMoreButton>
              }
              <PostFooterDescriptionContainer
                onTextLayout={handleDescriptionTextLayout}
                numberOfLines={descriptionLines}
              >
                <PostFooterDescriptionUsername>{post.comments[0].user.username} </PostFooterDescriptionUsername>
                <PostFooterDescription>{post.comments[0].comment}</PostFooterDescription>
              </PostFooterDescriptionContainer>
            </>
          }
        </PostFooterFeedbackContainer>
      </PostFooterContainer>
  )
}

export default PostFooter
