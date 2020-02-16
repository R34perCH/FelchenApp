import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DetailScreen from './screens/DetailScreen';
import WeatherScreen from './screens/WeatherScreen';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: 'Übersicht',
                    headerTitleAlign: 'center',
                    headerTintColor: 'darkorange',
                    headerStyle: { backgroundColor: 'aliceblue' },
                }} />
            <Stack.Screen name="Detail"
                component={DetailScreen}
                options={{
                    headerTitle: 'Detail-Statistik',
                    headerTitleAlign: 'center',
                    headerTintColor: 'darkorange',
                    headerStyle: { backgroundColor: 'aliceblue' },
                }} />
        </Stack.Navigator>
    );
}

export default class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{
                    style: {
                        backgroundColor: 'aliceblue',
                    },
                    labelStyle: { fontSize: 14 },
                    inactiveTintColor: 'black',
                    activeTintColor: 'blue',
                }}>
                    <Tab.Screen
                        name="Statistik"
                        component={HomeStack}
                        options={{
                            tabBarIcon: () => (
                                <MaterialCommunityIcons name="home" color={'darkorange'} size={30} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Wetter"
                        component={WeatherScreen}
                        options={{
                            tabBarIcon: () => (
                                <MaterialCommunityIcons name="information" color={'darkorange'} size={30} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Einstellungen"
                        component={SettingsScreen}
                        options={{
                            tabBarIcon: () => (
                                <MaterialCommunityIcons name="settings" color={'darkorange'} size={30} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}