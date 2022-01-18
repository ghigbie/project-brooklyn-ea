import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import FantasyCard from './FantasyCard';
import colors from '../themes/colors';

const FantasyRoster = ({center, forward, guard, removePlayer}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <>
          {center.length < 0 && forward.length < 0 && guard.length < 0 ? (
            <Text style={styles.text}>Please Add Players</Text>
          ) : (
            <>
              {center.map((player, index) => (
                <FantasyCard
                  key={player.personId}
                  playerId={player.personId}
                  player={player}
                  index={index}
                  position="center"
                  team={player.teamId}
                  city={player.teamSitesOnly?.displayAffiliation.split('/')[0]}
                  onPressRemove={removePlayer}
                  name={`${player?.firstName} ${player?.lastName}`}
                />
              ))}

              {forward.map((player, index) => (
                <FantasyCard
                  key={player.personId}
                  playerId={player.personId}
                  player={player}
                  index={index}
                  position="forward"
                  team={player.teamId}
                  city={player.teamSitesOnly?.displayAffiliation.split('/')[0]}
                  onPressRemove={removePlayer}
                  name={`${player?.firstName} ${player?.lastName}`}
                />
              ))}

              {guard.map((player, index) => (
                <FantasyCard
                  key={player.personId}
                  playerId={player.personId}
                  player={player}
                  index={index}
                  position="guard"
                  team={player.teamId}
                  city={player.teamSitesOnly?.displayAffiliation.split('/')[0]}
                  onPressRemove={removePlayer}
                  name={`${player?.firstName} ${player?.lastName}`}
                />
              ))}
            </>
          )}
        </>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
  text: {
    alignSelf: 'center',
    fontWeight: '800',
    marginTop: 80,
  },
});

export default FantasyRoster;
