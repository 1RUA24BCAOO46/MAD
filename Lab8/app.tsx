import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

import { CartProvider } from './src/context/CartContext'

import BottomTabs from './src/navigation/BottomTabs'
import Details from './src/screens/Details'

const Stack = createStackNavigator()

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#2196F3' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
          }}
        >

          {/* Bottom Tabs */}
          <Stack.Screen
            name="Main"
            component={BottomTabs}
            options={({ navigation }) => ({
              title: "My Store",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Main', { screen: 'Profile' })}
                  style={{ marginRight: 15 }}
                >
                  <Image
                    source={require('./src/assets/profile.jpg')}
                    style={styles.avatar}
                  />
                </TouchableOpacity>
              )
            })}
          />

          {/* Details Screen */}
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ title: "Product Details" }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

export default App

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff'
  }
})
