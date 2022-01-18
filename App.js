import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import colors from './src/themes/colors';

const App = () => (
  <SafeAreaView style={styles.container}>
    <MainScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
});

export default App;
