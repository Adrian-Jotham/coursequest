import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GradientBackground = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        <Text style={styles.text}>Gradient Background</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default GradientBackground;
