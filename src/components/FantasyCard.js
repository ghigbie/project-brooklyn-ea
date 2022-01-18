import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import GeneralButton from '../components/GeneralButton';
import colors from '../themes/colors';

const FantasyCard = ({
  player,
  index,
  playerId,
  name,
  position,
  team,
  city,
  onPressRemove,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          source={{
            uri: `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`,
          }}
          style={styles.imageStyles}
          resizeMode="cover"
        />
        <View style={styles.textButtonContainer}>
          <>
            <Text style={styles.textStyles}>{name}</Text>
            <Text style={styles.textStyles}>{position}</Text>
            <Text style={styles.textStyles}>{team}</Text>
            <Text style={styles.textStyles}>{city}</Text>
          </>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <GeneralButton
            title="Remove"
            color={colors.red}
            onPress={() => {
              onPressRemove(playerId, position, index);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: '100%',
    backgroundColor: colors.lightGrey,
    borderTopColor: colors.darkGrey,
    borderTopWidth: 1,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageStyles: {
    width: '35%',
    height: 200,
    backgroundColor: colors.red,
  },
  textButtonContainer: {
    margin: 8,
  },
  textStyles: {
    fontSize: 12,
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
    bottom: 0,
  },
  buttonContainer: {
    width: '45%',
    marginBottom: 4,
  },
});

export default FantasyCard;
