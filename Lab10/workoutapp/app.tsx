import React from "react"
import { StatusBar } from "react-native"
import { NavigationContainer, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Exercise } from "./data/exercises"

import HomeScreen from "./screens/HomeScreen"
import ExerciseDetailScreen from "./screens/ExerciseDetailScreen"

export type RootStackParamList = {
  Home: undefined
  Details: { exercise: Exercise }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const premiumTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#E2F163', // A vibrant neon green/yellow for accents
    background: '#121212', // Deep dark background
    card: '#1E1E1E', // Slightly lighter for headers/cards
    text: '#FFFFFF',
    border: '#2A2A2A',
    notification: '#FF453A',
  },
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" translucent={false} />
      <NavigationContainer theme={premiumTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1E1E1E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize: 20,
            },
            headerShadowVisible: false, // Removes the bottom border for a clean look
            animation: 'slide_from_right'
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Workout Guide' }}
          />
          <Stack.Screen
            name="Details"
            component={ExerciseDetailScreen}
            options={({ route }: any) => ({ title: route.params.exercise.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
