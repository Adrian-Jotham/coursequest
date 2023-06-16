import React from 'react';
import { View, Image, StyleSheet, Text, ImageBackground } from 'react-native';
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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >

                                          {/* INI DALEM SCROL */}
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
                source={require('./Gambar/Hati.png')}
                style={styles.masukWishlist}
              />
          </ImageBackground>
          <Text style={styles.textDalamContainer}>Basic on Jungle Survival</Text>
          <View style={styles.harga}>
            <Text style={styles.textDalamContainer2}>$ 15.99</Text>
            <Image
              source={require('./Gambar/ArrowBLACK.png')}
              style={styles.arrowBlack}
            />
          </View>
        </View>

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
                source={require('./Gambar/Hati.png')}
                style={styles.masukWishlist}
              />
          </ImageBackground>
          <Text style={styles.textDalamContainer}>Basic on Jungle Survival</Text>
          <View style={styles.harga}>
            <Text style={styles.textDalamContainer2}>$ 15.99</Text>
            <Image
              source={require('./Gambar/ArrowBLACK.png')}
              style={styles.arrowBlack}
            />
          </View>
        </View>

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
                source={require('./Gambar/Hati.png')}
                style={styles.masukWishlist}
              />
          </ImageBackground>
          <Text style={styles.textDalamContainer}>Basic on Jungle Survival</Text>
          <View style={styles.harga}>
            <Text style={styles.textDalamContainer2}>$ 15.99</Text>
            <Image
              source={require('./Gambar/ArrowBLACK.png')}
              style={styles.arrowBlack}
            />
          </View>
        </View>

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
                source={require('./Gambar/Hati.png')}
                style={styles.masukWishlist}
              />
          </ImageBackground>
          <Text style={styles.textDalamContainer}>Basic on Jungle Survival</Text>
          <View style={styles.harga}>
            <Text style={styles.textDalamContainer2}>$ 15.99</Text>
            <Image
              source={require('./Gambar/ArrowBLACK.png')}
              style={styles.arrowBlack}
            />
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.textContainer2}>
        <Text style={styles.textFeature}>Categories</Text>
        <Text style={styles.textSee2}>See all</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.navigationBar}>
          <Image
            source={require('./Gambar/home.png')}
            style={styles.insideNav}
          />
          <Image
            source={require('./Gambar/book.png')}
            style={styles.insideNav}
          />
          <Image
            source={require('./Gambar/love.png')}
            style={styles.insideNav}
          />
          <Image
            source={require('./Gambar/profile.png')}
            style={styles.insideNav}
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
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
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
    // marginTop:5,
  },
  textContainer:{
    flexDirection:'row',
  },
  textContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: 30,
    marginTop: 20,
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
  textSee2: {
    textAlign: 'left',
    marginTop: 40,
    marginLeft: 200,
    fontSize: 20,
    color: '#5C2605',
  },
  textDalamContainer: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 12,
    color: '#5C2605',
  },
  textDalamContainer2: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 15,
    color: '#5C2605',
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
  scrollContainer:{
    padding:22,
  },
  innerContainer:{
    width: 227,
    height: 229,
    borderRadius:15,
    marginRight:23,
    backgroundColor:'white',
  },
  gambarBox:{
    width: 200,
    height: 123,
    marginTop:11,
    marginHorizontal: 13.5,
    flexDirection:'row',
  },
  masukWishlist:{
    // marginBottom:100,
    marginRight:10,
    marginLeft:90,
    marginTop:10,
  },
  harga:{
    flexDirection:'row',
  },
  arrowBlack:{
    marginLeft:120,
    marginTop:40,
  },
  textCategories: {
    // marginTop: 40,
    // marginLeft: 20,
    // fontSize: 15,
    color: '#5C2605',
  },
  navigationBar:{
    flexDirection:'row',
    padding:10,
    marginLeft:10,
  },
  insideNav:{
    marginLeft:50,
  },
});

export default HomePage;
