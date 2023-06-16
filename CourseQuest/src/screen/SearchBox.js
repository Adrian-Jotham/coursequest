import React, { useState } from 'react';
import { TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Lakukan operasi pencarian atau perbarui hasil pencarian menggunakan nilai searchText
    console.log('Lakukan pencarian:', searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          {/* <Icon name="search" size={20} color="#fff" /> */}
          <Image source={require('./Gambar/Search.png')} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Search a New Quest"
          value={searchText}
          onChangeText={setSearchText}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 16,
    marginRight:0,
    height:36,
    // flex:1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor:'white',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  searchButton: {
    padding: 5,
    marginLeft: 5,
    borderRadius: 20,
  },
});

export default SearchBox;
