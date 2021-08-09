import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

export const PostContainer = styled.View`
  max-height: 800px;
  border-bottom-width: 2px;
  border-bottom-color: #222;
`

export const PostHeaderContainer = styled.View`
  height: 60px;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
`

export const PostHeaderUserContainer = styled(LinearGradient)`
  height: 46px;
  width: 46px;
  border-radius: 23px;
  border-width: 2px;
  border-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`

export const PostHeaderUserImage = styled.Image`
  height: 38px;
  width: 38px;
  border-radius: 19px;
  border-width: 2px;
  border-color: #000;
`

export const PostHeaderInfoContainer = styled.View`
  display: flex;
  justify-content: center;
  margin-right: auto;
`

export const PostHeaderInfoName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`

export const PostHeaderInfoLocation = styled.Text`
  color: #fff;
  font-size: 12px;
`

export const PostHeaderRightContainer = styled.View`
  display: flex;
  justify-content: center;
`

export const PostContentContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PostContentImage = styled.Image``

export const PostFooterContainer = styled.View`
  padding: 10px 15px;
  max-height: 600px;
  
`

export const PostFooterLikedByContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`

export const PostFooterButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const PostFooterLeftButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;
`

export const PostFooterRightButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
`

export const PostFooterFeedbackContainer = styled.View`
  margin-top: 10px;
`

export const PostFooterFeedbackViews = styled.Text`
  color: #fff;
  font-weight: bold;
`

export const PostFooterDescriptionContainer = styled.Text`
  color: #fff;
`

export const PostFooterCommentContainer = styled.Text`
  color: #fff;
`

export const PostFooterDescriptionUsername = styled.Text`
  font-weight: bold;
`

export const PostFooterDescription = styled.Text``

export const PostFooterShowMoreButton = styled.Pressable`
  width: 100%;
`

export const PostFooterShowMoreText = styled.Text`
  color: #999;
`

export const PostContentIndicatorsContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: -30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`