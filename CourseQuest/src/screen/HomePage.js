import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import SearchBox from './SearchBox';
import { ScrollView } from 'react-native-gesture-handler';

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
      <View style={styles.searchContainer}>
        <View style={styles.searchBoxContainer}>
          <SearchBox style={styles.searchBox} />
        </View>
        <Image
          source={require('./Gambar/Filter.png')}
          style={styles.filterIcon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textFeature}>Featured</Text>
        <Text style={styles.textSee}>See all</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D6D6',
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: 42,
    marginLeft: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    width: '85%',
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    alignItems: 'center',
  },
  searchBoxContainer: {
    flex: 1,
  },
  searchBox: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  logo: {
    marginRight: 54,
  },
  logoLonceng: {
    marginBottom: 10,
  },
  filterIcon: {
    width: 42,
    height: 38,
    marginRight:30,
  },
  textContainer:{
    flexDirection:'row',
  },
  textWelcome: {
    textAlign: 'left',
    marginTop: 27,
    marginLeft: 30,
    fontSize: 15,
    color: '#5C2605',
  },
  textFind: {
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 30,
    fontSize: 20,
    color: '#5C2605',
  },
  textFeature: {
    textAlign: 'left',
    marginTop: 40,
    marginLeft: 30,
    fontSize: 20,
    color: '#5C2605',
  },
  textSee: {
    textAlign: 'left',
    marginTop: 40,
    marginLeft: 220,
    fontSize: 20,
    color: '#5C2605',
  },
  scrollContainer:{
    
  },
});

export default HomePage;
