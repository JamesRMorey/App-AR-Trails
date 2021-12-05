import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//Screens
import BadgeDetails from '../screens/trails/trailDetails';
import BadgesIndex from '../screens/badges/badges';

const Stack = createStackNavigator();

export default function BadgesStack() {
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Trails" component={BadgesIndex} />
          <Stack.Screen name="Trail Details" component={BadgeDetails} />
        </Stack.Navigator>
  );
}