import React from 'react';
import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity, ImageBackground } from 'react-native';

import BottomNavbar from './navbar'
import { useNavigation } from '@react-navigation/native';


const wishlist = () => {
    return(
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
        </View>
    )
}