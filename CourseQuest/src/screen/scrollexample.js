import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ScrolabelView = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default ScrolabelView;
