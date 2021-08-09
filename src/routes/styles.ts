import styled from "styled-components/native";

import { ProfileIconProps } from '../dto'

export const BottomTabProfileIcon = styled.View<ProfileIconProps>`
  border-width: 2px;
  ${({active, color}) => active && (`border-color: ${color};`)};
  width: 26px;
  height: 26px;
  border-radius: 13px;
  overflow: hidden;
`

export const BottomTabProfileIconImage = styled.Image`
  height: 35px;
`

export const HomeHeaderLogo = styled.Image`
  width: 120px;
`

export const HomeHeaderButtonsContainer = styled.View`
  margin-right: 20px;
  width: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`