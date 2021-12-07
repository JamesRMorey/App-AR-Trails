import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//Screens

import BadgesIndex from '../screens/badges/badges';
import BadgeDetails from '../screens/badges/badgeDetails';

const Stack = createStackNavigator();

export default function BadgesStack() {
  return (
        <Stack.Navigator>
          <Stack.Screen name="Badges" component={BadgesIndex} />
          <Stack.Screen name="Badge Info" component={BadgeDetails} />
        </Stack.Navigator>
  );
}