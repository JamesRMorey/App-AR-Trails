import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../stylesheets/colors";
import { Fontisto, SimpleLineIcons } from '@expo/vector-icons'; 


import Landing from "../screens/auth/landing";
import Login from "../screens/auth/login";
import Register from '../screens/auth/register';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrailsStack from "./trailsStack";
import Camera from "../screens/camera";
import BadgesStack from "./badgesStack";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppStack() {

    //User Authentication state
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <NavigationContainer>
                {!isAuthenticated ?
                <Stack.Navigator name="Auth Stack">
                    <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
                    <Stack.Screen name="Login" options={{headerShown: false}} >
                        {() => <Login setIsAuthenticated={isAuthenticated => setIsAuthenticated(isAuthenticated)}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
                </Stack.Navigator>
                : 
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
                    <Tab.Screen name="Camera" options={{
                        tabBarIcon: ({ color, size }) => (<SimpleLineIcons name="camera" size={35} color={color} />)
                    }}>
                         {() => <Camera setIsAuthenticated={isAuthenticated => setIsAuthenticated(isAuthenticated)}/>}
                    </Tab.Screen>
                    <Tab.Screen name="Badges" component={BadgesStack} options={{
                        tabBarIcon: ({ color, size }) => (<SimpleLineIcons name="badge" size={35} color={color} />)
                    }}/>
                </Tab.Navigator>
                }
        </NavigationContainer>
    );
};