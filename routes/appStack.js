import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import TrailsStack from "./trailsStack";
import BadgesStack from "./badgesStack";

//Icons
import { Fontisto, SimpleLineIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: '#fff',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarLabelStyle: {
                display: "none",
            },
            tabBarActiveTintColor: '#fa7002',
            tabBarInactiveTintColor: '#A9A9A9'
        }}>
            <Tab.Screen name="Trails" component={TrailsStack} options={{
                tabBarIcon: ({ color, size }) => (<Fontisto name="map" size={35} color={color}/>)
            }}/>
            <Tab.Screen name="Badges" component={BadgesStack} options={{
                tabBarIcon: ({ color, size }) => (<SimpleLineIcons name="badge" size={35} color={color} />)
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}