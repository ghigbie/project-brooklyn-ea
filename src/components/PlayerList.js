import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import PlayerCard from '../components/PlayerCard';
import ButtonRow from './ButtonRow';

const PlayerList = ({
  players,
  positions,
  setPlayerPosition,
  filterByPosition,
  reset,
  addPlayer,
}) => {
  const renderItem = ({item}) => (
    <PlayerCard
      player={item}
      firstName={item.firstName}
      lastName={item.lastName}
      siteInfo={item.teamSitesOnly}
      team={item.teamId}
      playerId={item.personId}
      position={item.pos}
      addPlayer={addPlayer}
    />
  );

  return (
    <View style={styles.container}>
      <ButtonRow
        positions={positions}
        style={styles.buttonRow}
        filterByPosition={filterByPosition}
        reset={reset}
      />
      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 0.5,
  },
  buttonRow: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
  },
});

export default PlayerList;
