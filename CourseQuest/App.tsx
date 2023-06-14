import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LogoScreen from './src/screen/LogoScreen';
import HelloWorld from './src/screen/HELLOWORLD';
import Homee from './src/screen/Homee';

import ScrolabelView from './src/screen/scrollexample';
import SearchView from './src/screen/search';

import { AppRegistry } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <SearchView/>
    </View>
  );
};


// AppRegistry.registerComponent('YourAppName', () => Homee);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

