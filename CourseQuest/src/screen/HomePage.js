import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./Gambar/HomeLogo.png')} style={styles.logo} />
      <Image source={require('./Gambar/Lonceng.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    marginTop:42,
    marginRight:120,
  },
});

export default HomePage;
