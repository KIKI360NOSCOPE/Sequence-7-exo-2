import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PersonnageScreen from '../screens/PersonnageScreen';
import BiographieScreen from '../screens/BiographieScreen';



const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Accueil" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Personnage" component={PersonnageScreen} />
            <Drawer.Screen name="Biographie" component={BiographieScreen} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
    }
    

export default DrawerNavigation;