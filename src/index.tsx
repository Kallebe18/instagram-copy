import 'react-native-gesture-handler';

import React from 'react'
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './routes'
import mockServer from './mocks'

mockServer()

function App() {
  return (
    // makes it safe to render screens :D
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App