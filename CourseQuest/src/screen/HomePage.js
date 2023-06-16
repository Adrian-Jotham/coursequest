import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Homee = () => {
  return (
    <LinearGradient
      colors={['#EFEFEF', '#D6D6D6']}
      style={styles.gradient}
    >
    <View style={styles.container}>
 
      <Image source={require('./Gambar/HomeLogo.png')} style={styles.logo} />
    
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },

 
});

export default Homee;