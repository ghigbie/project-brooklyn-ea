import React from 'react';

import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../themes/colors';

const SortingButton = ({
  title = 'Center',
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
    alignSelf: 'center',
    backgroundColor: colors.green,
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 6,
    shadowColor: colors.black,
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
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default SortingButton;
