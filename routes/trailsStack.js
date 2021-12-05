import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TrailDetails from '../screens/trails/trailDetails';
import TrailsIndex from '../screens/trails/trails';

const Stack = createStackNavigator();

export default function TrailsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trails" component={TrailsIndex} />
      <Stack.Screen name="Trail Details" component={TrailDetails} />
    </Stack.Navigator>
  );
}