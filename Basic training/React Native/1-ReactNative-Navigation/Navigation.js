import React from "react";
import { createBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";


//Screen
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import StackScreen from './screens/StackScreen';

//Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions= {{
                tabBarActiveTintColor: 'black',
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color="purple", size=30 }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                    tabBarBadge: 10,
                    // Quita el nombre del tab
                    //headerShown: false,
                }} 
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color="purple", size=30 }) => (
                        <MaterialCommunityIcons name="account-settings" size={size} color={color} />
                    ),
                    tabBarBadge: 10,
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}