import { ViewProps } from "react-native";

export interface ProfileIconProps extends ViewProps {
  color: string, 
  active: boolean
}

export interface UserInfo {
  id: string;
  username: string;
  image: string;
}

export interface StoriesInfo {
  id: string;
  user: UserInfo;
}

export interface CommentInfo {
  id: string;
  user: UserInfo;
  comment: string;
}

export interface LikeInfo {
  id: string;
  user: UserInfo;
}

export interface PostInfo {
  id: string;
  user: UserInfo;
  location: string;
  images: string[];
  description: string;
  likes: LikeInfo[];
  comments: CommentInfo[];
}