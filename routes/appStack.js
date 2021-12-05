import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import TrailsStack from "./trailsStack";
import BadgesStack from "./badgesStack";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Trails" component={TrailsStack}/>
            <Tab.Screen name="Badges" component={BadgesStack}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}