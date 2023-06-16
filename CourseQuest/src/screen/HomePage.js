import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import SearchBox from './SearchBox';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./Gambar/HomeLogo.png')}
          style={styles.logo}
        />
        <Image
          source={require('./Gambar/Lonceng.png')}
          style={styles.logoLonceng}
        />
      </View>
      <Text style={styles.textWelcome}>Welcome Traveler,</Text>
      <Text style={styles.textFind}>Find the best quest for you!</Text>
      <View style={styles.Search}>
        <SearchBox/>
        <View style={styles.logoFilter}>
          <Image source={require('./Gambar/Filter.png')}/>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D6D6',
    // alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: 42,
    marginLeft: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems:'center',
    width:'85%',
  },
  Search:{
    marginTop:20,
    marginLeft:15,
  },
  logo: {
    marginRight: 54,
  },
  logoLonceng: {
    marginBottom: 10,
  },
  logoFilter: {
    // marginBottom: 10,
    alignItems:'flex-end'

  },
  textWelcome: {
    textAlign: 'left',
    marginTop:27,
    marginLeft:30,
    fontSize:15,
    color:'#5C2605',
  },
  textFind:{
    textAlign: 'left',
    marginTop:10,
    marginLeft:30,
    fontSize:20,
    color:'#5C2605',
  },
});

export default HomePage;
