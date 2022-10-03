import React, { } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './component/screen/Home'
import MyCart from './component/screen/MyCart'
import ProductInfo from './component/screen/ProductInfo'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='MyCart' component={MyCart} />
        <Stack.Screen name='ProductInfo' component={ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App