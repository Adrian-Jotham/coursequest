import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LogoScreen = () => {
  return (
    <View style={styles.container}>
 
      <Image source={require('./Gambar/Logo.png')} style={styles.logo} />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 428, // set your desired width
    height: 428, // set your desired height
  },
});

export default LogoScreen;