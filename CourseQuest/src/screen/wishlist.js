import React from 'react';
import { View, Image, StyleSheet, Text, ImageBackground } from 'react-native';
import SearchBox from './SearchBox';
import { ScrollView } from 'react-native-gesture-handler';

const Wishlist = () => {
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

      <Text style={styles.textProfile}>Wishlist</Text>
      <View style={styles.innerContainer}>
          <ImageBackground
            source={require('./Gambar/Api.png')}
            style={styles.gambarBox}
          >
            <View style={styles.gambarChild}>
              <Text style={styles.textCreated}>Created by :</Text>
              <Text style={styles.textNameCreator}>Tarzan</Text>
            </View>
              <Image
                source={require('./Gambar/hatiMerah.png')}
                style={styles.masukWishlist}
              />
          </ImageBackground>
          <Text style={styles.textDalamContainer}>Memasak</Text>
          <View style={styles.harga}>
            <Text style={styles.textDalamContainer2}>$ 15.99</Text>
            <Image
              source={require('./Gambar/ArrowBLACK.png')}
              style={styles.arrowBlack}
            />
          </View>
        </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#D6D6D6',
    alignItems: 'center', // Center horizontally
    
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: 42,
    // marginLeft: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    width: '80%',

  },
  innerContainer:{
    justifyContent:'center',
    width: 227,
    height: 229,
    borderRadius:15,
    marginTop:20,
    // marginRight:23,
    backgroundColor:'white',
  },
  gambarBox:{
    width: 200,
    height: 123,
    marginTop:11,
    marginHorizontal: 13.5,
    flexDirection:'row',
  },
  textCreated: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 12,
    color: 'white',
  },
  textNameCreator: {

    marginLeft: 10,
    fontSize: 15,
    color: 'white',
  },
  masukWishlist:{
    // marginBottom:100,
    marginRight:10,
    marginLeft:90,
    marginTop:10,
  },
  textDalamContainer: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 12,
    color: '#5C2605',
  },
  textDalamContainer2: {
    // marginTop: 40,
    marginLeft: 20,
    fontSize: 15,
    color: '#5C2605',
  },
  arrowBlack:{
    marginLeft:180,
    // marginTop:40,
  },
  logo: {
    marginRight: 20,
  },
  logoLonceng: {
    marginBottom: 10,
  },
  textProfile: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight:'bold',
    color: '#5C2605',
  },
  textNama: {
    fontSize: 20,
    marginLeft: 40,
    marginTop: 10,
    fontWeight:'bold',
    color: '#5C2605',
  },
  textCourse: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom:60,
    fontWeight:'bold',
    color: '#5C2605',
  },
  textLain: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold',
    color: '#5C2605',
  },
  tempatProfile: {
    marginLeft: 90,
  },
  
  
});

export default Wishlist;
