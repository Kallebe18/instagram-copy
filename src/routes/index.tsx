import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { 
  Heart, 
  Home, 
  PlusCircle, 
  Search, 
  Send, 
  ShoppingBag, 
  Video 
} from "react-native-feather";

import { HomeScreen } from '../screens/home'
import { Comments } from '../screens/comments'

import { CommentInfo, ProfileIconProps } from '../dto';
import { 
  BottomTabProfileIcon,
  BottomTabProfileIconImage,
  HomeHeaderLogo,
  HomeHeaderButtonsContainer
} from './styles'

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Reels: undefined;
  Shop: undefined;
  Profile: undefined;
}

export type RootStackParamList = {
  Tabs: undefined;
  Comments: {
    comments: CommentInfo[]
  };
}

function ProfileIcon ({color, active}: ProfileIconProps) {
  return (
    <BottomTabProfileIcon color={color} active={active}>
      <BottomTabProfileIconImage source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/220px-Pierre-Person.jpg" }}/>
    </BottomTabProfileIcon>
  )
}

function TabRoutes() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      headerStyle: {
        backgroundColor: '#000',
        borderBottomColor: '#333',
        borderBottomWidth: 1,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      tabBarIcon: ({ focused, color, size}) => {
        switch (route.name) {
          case "Home":
            return focused 
              ? <Home color={color} fill={color}/>
              : <Home color={color}/>  
          case "Search": 
            return focused 
              ? <Search color={color} fill={color}/>
              : <Search color={color}/>
          case "Reels": 
            return focused 
              ? <Video color={color} fill={color}/>
              : <Video color={color}/> 
            case "Shop":
          return focused 
            ? <ShoppingBag color={color} fill={color}/>
            : <ShoppingBag color={color}/> 
              case "Profile":
          return focused
            ? <ProfileIcon color={color} active={focused}/>
            : <ProfileIcon color={color} active={focused}/>
          default: break
        }
      },
      tabBarStyle: {
        backgroundColor: '#000',
        borderTopWidth: .5,
        borderTopColor: '#333',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#fff',
      tabBarShowLabel: false
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen}
      options={{
        headerTitle: () => <HomeHeaderLogo resizeMode='contain' source={require('./../assets/instagram-white.png')}/>,
        headerRight: () => (
          <HomeHeaderButtonsContainer>
            <PlusCircle color='#fff'/>
            <Heart color='#fff'/>
            <Send color='#fff'/>
          </HomeHeaderButtonsContainer>
        )
      }}
    />
    <Tab.Screen name="Search" component={HomeScreen}/>
    <Tab.Screen name="Reels" component={HomeScreen}/>
    <Tab.Screen name="Shop" component={HomeScreen}/>
    <Tab.Screen name="Profile" component={HomeScreen}/>
  </Tab.Navigator>
  )
}

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="Tabs" component={TabRoutes}/>
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
};