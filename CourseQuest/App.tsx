import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LogoScreen from './src/screen/LogoScreen';
import HelloWorld from './src/screen/HELLOWORLD';
import HomePage from './src/screen/HomePage';
import LoginPage from './src/screen/LoginPage';
import RegisterPage from './src/screen/RegisterPage';
import ScrolabelView from './src/screen/scrollexample';
import Search from './src/screen/search';
import QuestAsia from './src/screen/QuestAsia';
import questCooking from './src/screen/questCooking';
import Navbar from './src/screen/navbar';
import Wishlist from './src/screen/wishlist';
import Profile from './src/screen/Profile';
import Course from './src/screen/course';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        {/* <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="QuestAsia" component={QuestAsia} />
        <Stack.Screen name="QuestCooking" component={questCooking} /> */}
        <Stack.Screen name="Homepage" component={HomePage} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="Cookingquest" component={questCooking} />
        {/* <Stack.Screen name="Register" component={RegisterPage} /> */}
        <Stack.Screen name="View" component={ScrolabelView} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SearchView/>
  );
}
// AppRegistry.registerComponent('YourAppName', () => Homee);


export default App;

