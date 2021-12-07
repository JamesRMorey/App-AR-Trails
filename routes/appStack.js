import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import TrailsStack from "./trailsStack";
import BadgesStack from "./badgesStack";
import { colors } from "../stylesheets/colors";

//Icons
import { Fontisto, SimpleLineIcons } from '@expo/vector-icons'; 
import Camera from "../screens/camera";

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
            headerShown:false,
            tabBarLabelStyle: {
                display: "none",
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.grey
        }}>
            <Tab.Screen name="Trails" component={TrailsStack} options={{
                tabBarIcon: ({ color, size }) => (<Fontisto name="map" size={35} color={color}/>)
            }}/>
            <Tab.Screen name="Camera" component={Camera} options={{
                tabBarIcon: ({ color, size }) => (<SimpleLineIcons name="camera" size={35} color={color} />)
            }}/>
            <Tab.Screen name="Badges" component={BadgesStack} options={{
                tabBarIcon: ({ color, size }) => (<SimpleLineIcons name="badge" size={35} color={color} />)
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}