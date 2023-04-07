import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from './src/navigation/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#f1efee"} barStyle={"dark-content"} />
      <AppNavigator />
    </NavigationContainer>
  )
}

