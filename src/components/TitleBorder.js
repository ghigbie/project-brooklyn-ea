import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../themes/colors';

const TitleBorder = ({title, color = colors.white}) => (
  <View style={{...styles.container, backgroundColor: color}}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: '800',
  },
});

export default TitleBorder;
