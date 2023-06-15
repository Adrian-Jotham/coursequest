/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';

const SearchView = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./Gambar/back.png')} style={styles.imagaBack} />
        <Image source={require('./Gambar/HomeLogo.png')} style={styles.imageLogo} />
      </View>

      <Text style={styles.title}>Scrollable Content</Text>
      
      <View style={styles.content}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat felis nec ipsum pharetra rutrum.
          In dapibus, mauris ut varius semper, sem turpis placerat felis, id sollicitudin risus dolor eget lacus.
          Proin gravida justo vel tincidunt aliquet. Aenean venenatis interdum lacinia. Nullam vel arcu ac nibh
          elementum pellentesque eu sed turpis. Sed commodo mollis semper. Aliquam id sagittis mauris.
        </Text>
      </View>

      <Text style={styles.title}>Scrollable Content</Text>
      
      <View style={styles.content}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat felis nec ipsum pharetra rutrum.
          In dapibus, mauris ut varius semper, sem turpis placerat felis, id sollicitudin risus dolor eget lacus.
          Proin gravida justo vel tincidunt aliquet. Aenean venenatis interdum lacinia. Nullam vel arcu ac nibh
          elementum pellentesque eu sed turpis. Sed commodo mollis semper. Aliquam id sagittis mauris.
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat felis nec ipsum pharetra rutrum.
          In dapibus, mauris ut varius semper, sem turpis placerat felis, id sollicitudin risus dolor eget lacus.
          Proin gravida justo vel tincidunt aliquet. Aenean venenatis interdum lacinia. Nullam vel arcu ac nibh
          elementum pellentesque eu sed turpis. Sed commodo mollis semper. Aliquam id sagittis mauris.
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat felis nec ipsum pharetra rutrum.
          In dapibus, mauris ut varius semper, sem turpis placerat felis, id sollicitudin risus dolor eget lacus.
          Proin gravida justo vel tincidunt aliquet. Aenean venenatis interdum lacinia. Nullam vel arcu ac nibh
          elementum pellentesque eu sed turpis. Sed commodo mollis semper. Aliquam id sagittis mauris.
        </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  imageBack: {
    width: 50,
    height: 60,
    marginRight: 20,
  },
  imageLogo: {
    width: 275,
    height: 70,
    MarginLeft: 155,
    
  },
  // Rest of your styles
});

export default SearchView;

