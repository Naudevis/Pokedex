import React from 'react'
import AnimeScreen from './src/screens/AnimeScreen'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './src/navigation/DrawerNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
 
  )
}

export default App
