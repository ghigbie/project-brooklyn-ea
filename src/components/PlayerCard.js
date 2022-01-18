import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GeneralButton from './GeneralButton';
import colors from '../themes/colors';

const PlayerCard = ({
  player,
  firstName = 'First',
  lastName = 'Last',
  position = 'Position',
  team = 'Team',
  siteInfo,
  addPlayer = () => {},
}) => {
  const location = siteInfo.displayAffiliation.split('/')[0];

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.textButtonContainer}>
          <>
            <Text style={styles.textStyles}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.textStyles}>
              {siteInfo.posFull ? siteInfo.posFull : position}
            </Text>
            <Text style={styles.textStyles}>
              {team} - {location}
            </Text>
          </>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <GeneralButton
            title="Add"
            color={colors.blue}
            onPress={() => {
              console.log('positon: ', position);
              addPlayer(player, position);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 76,
    width: '100%',
    backgroundColor: colors.lightGrey,
    borderTopColor: colors.darkGrey,
    borderTopWidth: 0.75,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textButtonContainer: {
    margin: 12,
  },
  textStyles: {
    fontSize: 14,
    fontWeight: '700',
    flexDirection: 'row',
  },
  buttonRow: {
    height: 60,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: 0,
    bottom: 16,
  },
  buttonContainer: {
    width: '20%',
  },
});

export default PlayerCard;
