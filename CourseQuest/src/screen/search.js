import React, {useState} from 'react';
import { ScrollView, Image, View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Search = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const handleBackPress = () => {
    navigation.navigate('Homepage');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('./Gambar/back.png')} style={styles.imageBack} />
        </TouchableOpacity>
        <Image source={require('./Gambar/HomeLogo.png')} style={styles.imageLogo} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search a New Quest"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleBackPress}>
          <Image source={require('./Gambar/Search.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentPlaceholder}>
        <Image source={require('./Gambar/basic-guide.png')} style={styles.imagePlace} />
        <Text style={styles.text}>Basic Guide for Traveling</Text>
        <Text style={styles.text}>$15</Text>
      </View>

      <View style={styles.contentPlaceholder}>
        <Image source={require('./Gambar/basic-guide.png')} style={styles.imagePlace} />
        <Text style={styles.text}>Basic Guide for Traveling</Text>
        <Text style={styles.text}>$15</Text>
      </View>
      
      <View style={styles.contentPlaceholder}>
        <Image source={require('./Gambar/PatungLIberty.png')} style={styles.imagePlace} />
        <Text style={styles.text}>Basic Guide for Traveling</Text>
        <Text style={styles.text}>$15</Text>
      </View>
      
      <View style={styles.contentPlaceholder}>
        <Image source={require('./Gambar/PatungLIberty.png')} style={styles.imagePlace} />
        <Text style={styles.text}>Basic Guide for Traveling</Text>
        <Text style={styles.text}>$15</Text>
      </View>

      <View style={styles.contentPlaceholder}>
        <Image source={require('./Gambar/basic-guide.png')} style={styles.imagePlace} />
        <Text style={styles.text}>Basic Guide for Traveling</Text>
        <Text style={styles.text}>$15</Text>
      </View>

      <View style={styles.contentPlaceholder}>
        <Image source={require('./Gambar/PatungLIberty.png')} style={styles.imagePlace} />
        <Text style={styles.text}>Basic Guide for Traveling</Text>
        <Text style={styles.text}>$15</Text>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 15,
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
    flex: 1,
  },
  imageLogo: {
    width: 90,
    height: 75,
    flex: 2,
    right: -20,
    marginTop:10,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    paddingLeft: 20,
  },
  searchButton: {
    paddingRight: 20,
    marginLeft: 5,
    borderRadius: 20,
  },
  contentPlaceholder: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  imagePlace: {
    marginBottom: 20,
  },
  text: {
    color: '#5C2605',
  },
});

export default Search;