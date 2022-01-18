import React from 'react';

import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../themes/colors';

const GeneralButton = ({
  title = 'Press',
  color = colors.blue,
  onPress = () => {},
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{...styles.container, backgroundColor: color, ...style}}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#009688',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default GeneralButton;
