import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';
import colors from '../themes/colors';
import SortingButton from './SortingButton';

const ButtonRow = ({style, positions, filterByPosition, reset}) => {
  const [visible, toggleVisible] = useState(true);

  return (
    <View style={{...styles.container, ...style}}>
      {visible &&
        positions.map(position => (
          <SortingButton
            key={position}
            title={position}
            color={colors.green}
            onPress={() => {
              filterByPosition(position);
              toggleVisible(false);
            }}
          />
        ))}
      {!visible && (
        <SortingButton
          title={'Reset'}
          color={colors.green}
          onPress={() => {
            reset();
            toggleVisible(!visible);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
    marginTop: 2,
    width: 268,
    alignSelf: 'center',
  },
});

export default ButtonRow;
