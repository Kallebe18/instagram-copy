import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const StoryPressableContainer = styled.Pressable`
  width: 80px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  overflow: hidden;
`

export const StoryImageContainer = styled(LinearGradient)`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  border-width: 2px;
  border-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StoryImage = styled.Image`
  height: 72px;
  width: 72px;
  border-radius: 36px;
  border-width: 3px;
  border-color: #000;
`

export const StoryText = styled.Text`
  color: #fff;
  font-size: 12px;
`