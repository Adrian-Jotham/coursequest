import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavbar = () => {
    const navigation = useNavigation();
    const home = ()=> {
        navigation.navigate('Homepage')
    }
    const course = ()=> {
        navigation.navigate('Course')
    }
    const wishlist = ()=> {
        navigation.navigate('Wishlist')
    }
    const user = ()=> {
        navigation.navigate('Profile')
    }



  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={home}>
        {/* <Text style={styles.navText}>Home</Text> */}
        <Image source={require('./Gambar/home.png')} style={styles.navText}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={course}>
        {/* <Text style={styles.navText}>Home</Text> */}
        <Image source={require('./Gambar/course.png')} style={styles.navText}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={wishlist}>
        {/* <Text style={styles.navText}>Search</Text> */}
        <Image source={require('./Gambar/wishlist.png')} style={styles.navText}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={user}>
        {/* <Text style={styles.navText}/>Profile</Text> */}
        <Image source={require('./Gambar/user.png')} style={styles.navText}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,

  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default BottomNavbar;