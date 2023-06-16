import React, {useState} from 'react';
import {
  ScrollView,
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const questCooking = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const handleBackPress = () => {
    navigation.navigate('Course'); //kemananya itu
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            source={require('./Gambar/back.png')}
            style={styles.imageBack}
          />
        </TouchableOpacity>
        <Image
          source={require('./Gambar/HomeLogo.png')}
          style={styles.imageLogo}
        />
      </View>
      <View style={styles.containerItem}>
        <Image
          source={require('./Gambar/QuestMasak.png')}
          style={styles.imageContent}
        />
        <View style={styles.summary}>
          <View style={styles.description}>
            <Text>Home Cooking Guide</Text>
            <Text>"Unleash your culinary</Text>
            <Text>Creativity"</Text>
          </View>
          <View style={styles.value}>
            <Text>$9.99</Text>
          </View>
        </View>
        <Text>16 lectures • 2h 13m total length</Text>
        <Text>
          "Home Cooking Guide: Unleash Your Culinary Creativity" is your go-to
          resource for mastering the art of cooking in the comfort of your own
          kitchen. From basic techniques to mouthwatering recipes, this guide
          empowers you to create delicious homemade meals with confidence.
          Unlock your culinary potential, experiment with flavors, and delight
          your taste buds as you embark on a flavorful journey through the world
          of home cooking.
        </Text>
        <View style={styles.coursecontent}>
          <Text>Course Content</Text>
          <View style={styles.courseMaterials}>
            <View style={styles.courseInfo}>
              <Text>Project Setup</Text>
              <Text>3 Lectures ~ 20 minutes</Text>
            </View>
            <View style={styles.play}>
              <Image source={require('./Gambar/Play.png')} />
            </View>
          </View>

          <View style={styles.courseMaterials}>
            <View style={styles.courseInfo}>
              <Text>Project Setup</Text>
              <Text>3 Lectures ~ 20 minutes</Text>
            </View>
            <View style={styles.play}>
              <Image source={require('./Gambar/Play.png')} />
            </View>
          </View>

          <View style={styles.courseMaterials}>
            <View style={styles.courseInfo}>
              <Text>Project Setup</Text>
              <Text>3 Lectures ~ 20 minutes</Text>
            </View>
            <View style={styles.play}>
              <Image source={require('./Gambar/Play.png')} />
            </View>
          </View>

          <View style={styles.courseMaterials}>
            <View style={styles.courseInfo}>
              <Text>Project Setup</Text>
              <Text>3 Lectures ~ 20 minutes</Text>
            </View>
            <View style={styles.play}>
              <Image source={require('./Gambar/Play.png')} />
            </View>
          </View>
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
    flex: 1,
    // width: 25,
    // height: 25,
    // marginLeft: 10,
  },
  imageLogo: {
    flex: 4,
    // width: 250,
    // height: 70,
    // MarginLeft: 30,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'stretch',
    marginTop: 20,
    marginBottom: 20,
  },
  describe: {
    textAlign: 'left',
    flex: 1,
  },
  value: {
    textAlign: 'right',
    flex: 1,
    paddingLeft: 90,
  },
  containerItem: {
    borderWidth: 1,
    padding: 20,
    margin: 10,
    backgroundColor: '#DEDEDE',
    borderRadius: 10,
  },
  courseMaterials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'stretch',
    marginBottom: 20,
  },
  courseInfo: {
    textAlign: 'left',
    flex: 4,
    // marginRight:80,
  },
  play: {
    flex: 1,
    // paddingLeft:30,
    // paddingTop:10
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: 'green',
    // paddingLeft:50,
  },
  imageContent: {
    borderWidth: 10,
    borderColor: 'white',
    borderRadius: 10,
  },
  // Rest of your styles
});

export default questCooking;
