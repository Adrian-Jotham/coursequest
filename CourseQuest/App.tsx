import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LogoScreen from './src/screen/LogoScreen';
import HelloWorld from './src/screen/HELLOWORLD';
import Homee from './src/screen/Homee';
import LoginScreen from './src/screen/LoginPage';

import ScrolabelView from './src/screen/scrollexample';
import SearchView from './src/screen/search';
import QuestAsia from './src/screen/QuestAsia';

import { AppRegistry } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="View" component={ScrolabelView} />
      </Stack.Navigator>
    </NavigationContainer>
    // <LoginScreen/>
  );
}
// AppRegistry.registerComponent('YourAppName', () => Homee);


export default App;

