/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';

const SearchView = () => {
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={require('./Gambar/back.png')} style={styles.imageBack} />  
      </View>
      <View>
        <Image source={require('./Gambar/HomeLogo1.png')} style={styles.imageLogo} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexGrow: 0.5,
    flexDirection: 'row',
    // justifyContent: 'center',
    padding: 21,
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // marginBottom: 20,
    // marginLeft:30,
    marginTop:20,
    
  },
  imageBack: {
    width: 30,
    height: 30,
    paddingRight: 20,
    alignItems:'flex-start',
    marginBottom:300,

    flexDirection:'row',

    
  },
  imageLogo: {
     width: 275,
     height: 47,
    // MarginLeft: 115,
    // marginTop: 20,
  },
  // Rest of your styles
});

export default SearchView;

