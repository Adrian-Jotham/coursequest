import React from 'react';
import { View, Image, StyleSheet, Text, ImageBackground } from 'react-native';
import SearchBox from './SearchBox';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = () => {
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

      <Text style={styles.textProfile}>Profile</Text>

      <View style={styles.gambarProfile}>
        <View>
          <Text style={styles.textNama}>Goblin Slayer</Text>
          <Text style={styles.textNama}>"Orcbolg"</Text>
        </View>
        <Image
          source={require('./Gambar/profil.png')}
          style={styles.tempatProfile}
        />
      </View>
      
      <View style={styles.gambarProfile}>
        <View style={styles.innerContainer}>
          <Text style={styles.textCourse}>Course Taken</Text>
        </View>
        <View style={styles.innerContainer2}>
          <Text style={styles.textCourse}>Course Finished</Text>
        </View>
      </View>

      <View style={styles.buttonLain}>
        <Text style={styles.textLain}>Profile Lain</Text>
      </View>

      <View style={styles.buttonLain}>
        <Text style={styles.textLain}>Sertificate Claim</Text>
      </View>

      <View style={styles.buttonLain}>
        <Text style={styles.textLain}>Profile Lain</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
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
  logo: {
    marginRight: 54,
  },
  logoLonceng: {
    marginBottom: 10,
  },
  textProfile: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
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
  gambarProfile: {
    flexDirection: 'row',
    marginTop: 20,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 171,
    height: 113,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    marginTop: 40,
    marginLeft: 30,
    marginBottom:30,
    backgroundColor: 'white',
    borderColor: '#5C2605',
    borderWidth: 2,
  },
  innerContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 171,
    height: 113,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    marginTop: 40,
    backgroundColor: 'white',
    borderColor: '#5C2605',
    borderWidth: 2,
  },
  buttonLain: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 342,
    height: 49,
    borderRadius:12,
    // marginTop: 60,
    marginVertical:4,
    marginLeft: 30,
    backgroundColor: 'white',
    borderColor: '#5C2605',
    borderWidth: 2,
  },
});

export default Profile;
