import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BASEBG = () => {
  return (
    <LinearGradient
      colors={['#EFEFEF', '#AEAEAE']}
      style={styles.container}
    >
      {/* Konten aplikasi Anda di sini */}
      <View style={styles.content}>
        {/* ... */}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BASEBG;
