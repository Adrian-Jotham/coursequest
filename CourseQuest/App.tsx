import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LogoScreen from './src/screen/LogoScreen';
import HelloWorld from './src/screen/HELLOWORLD';
import HomePage from './src/screen/HomePage';
<<<<<<< Updated upstream
import LoginScreen from './src/screen/LoginPage';
import RegisterScreen from './src/screen/RegisterPage';
=======
import LoginPage from './src/screen/LoginPage';
import RegisterPage from './src/screen/RegisterPage';


>>>>>>> Stashed changes
import ScrolabelView from './src/screen/scrollexample';
import Search from './src/screen/search';
import QuestAsia from './src/screen/QuestAsia';
import questCooking from './src/screen/questCooking';
import Navbar from './src/screen/navbar';
<<<<<<< Updated upstream
=======

import { AppRegistry } from 'react-native';
import wishlist from './src/screen/wishlist'
import Profile from './src/screen/Profile';
>>>>>>> Stashed changes

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< Updated upstream
        <Stack.Screen name="Homepage" component={Search} />
        {/* <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="View" component={ScrolabelView} /> */}
=======
        {/* <Stack.Screen name="wishlist" component={wishlist} /> */}
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        {/* <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="QuestAsia" component={QuestAsia} />
        <Stack.Screen name="QuestCooking" component={questCooking} /> */}
        <Stack.Screen name="Homepage" component={HomePage} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        
        {/* <Stack.Screen name="Register" component={RegisterPage} /> */}
        <Stack.Screen name="View" component={ScrolabelView} />
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
    // <SearchView/>
  );
}
// AppRegistry.registerComponent('YourAppName', () => Homee);


export default App;

