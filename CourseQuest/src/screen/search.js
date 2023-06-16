/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { ScrollView, Image, View, Text,TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Search = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const handleBackPress = () => {
    navigation.navigate('Homepage'); //kemananya itu
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('./Gambar/back.png')} style={styles.imageBack} />
        </TouchableOpacity>
        <Image source={require('./Gambar/HomeLogo.png')} style={styles.imageLogo} />
      </View>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search a New Quest"
              value={searchText}
              onChangeText={setSearchText} />
            <TouchableOpacity style={styles.searchButton} onPress={handleBackPress}>
              {/* <Icon name="search" size={20} color="#fff" /> */}
              <Image source={require('./Gambar/Search.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentPlaceholder}>
            <Image source={require('./Gambar/basic-guide.png')} style={styles.imagePlace}/>
            <Text>Basic Guide for Traveling</Text>
            <Text>15$</Text>
          </View>
          <View style={styles.contentPlaceholder}>
            <Image source={require('./Gambar/PatungLIberty.png')} style={styles.imagePlace}/>
            <Text>Basic Guide for Traveling</Text>
            <Text>15$</Text>
          </View>
          <View style={styles.contentPlaceholder}>
            <Image source={require('./Gambar/basic-guide.png')} style={styles.imagePlace}/>
            <Text>Basic Guide for Traveling</Text>
            <Text>15$</Text>
          </View>
          <View style={styles.contentPlaceholder}>
            <Image source={require('./Gambar/PatungLIberty.png')} style={styles.imagePlace}/>
            <Text>Basic Guide for Traveling</Text>
            <Text>15$</Text>
          </View>
          <View style={styles.contentPlaceholder}>
            <Image source={require('./Gambar/basic-guide.png')} style={styles.imagePlace}/>
            <Text>Basic Guide for Traveling</Text>
            <Text>15$</Text>
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  imageBack: {
    flex:1,
    // width: 25,
    // height: 25,
    // marginLeft: 10,
  },
  imageLogo: {
    flex:4,
    // width: 250,
    // height: 70,
    // MarginLeft: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    paddingLeft:20,
  },
  searchButton: {
    paddingRight: 20,
    marginLeft: 5,
    borderRadius: 20,
  },
  contentPlaceholder: {
    borderWidth:1,
    borderColor: 'black',
    borderRadius: 20,
    paddingTop:10 ,
    paddingLeft:15,
    paddingRight:15,
    paddingBottom:10,
    marginBottom:20,
  },
  imageplace:{
    marginBottom:20,
  },
  // Rest of your styles
});

export default Search;

