import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LogoScreen from './src/screen/LogoScreen';
import HelloWorld from './src/screen/HELLOWORLD';
import Homee from './src/screen/Homee';


const App = () => {
  return (
    <View style={styles.container}>
      <Homee/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

