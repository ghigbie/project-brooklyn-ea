import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PlayerList from '../components/PlayerList';
import TeamNameCity from '../components/TeamNameCity';
import FantasyRoster from '../components/FantasyRoster';
import TitleBorder from '../components/TitleBorder';
import colors from '../themes/colors';
import roster from '../data/roster.json';

const starterRoster = {
  center: [{...roster.league.standard[1], position: 'center'}],
  forward: [
    {...roster.league.standard[2], position: 'forward'},
    {...roster.league.standard[3], position: 'forward'},
  ],
  guard: [
    {...roster.league.standard[112], position: 'guard'},
    {...roster.league.standard[5], position: 'guard'},
  ],
};

const positions = ['center', 'forward', 'guard'];

const MainScreen = () => {
  //   const [fantasyRoster, setFantasyRoster] = useState(starterRoster);
  const [center, setCenter] = useState(starterRoster.center);
  const [forward, setForward] = useState(starterRoster.forward);
  const [guard, setGuard] = useState(starterRoster.guard);
  const [players, setPlayers] = useState(roster.league.standard);

  const addPlayer = (player, position) => {
    if (position.includes('C')) {
      setCenter([{...player, position: 'center'}]);
    }

    if (
      position.includes('F') &&
      forward?.some(el => {
        console.log(el.personId, player.personId);
        return el.personId !== player.personId;
      }) &&
      forward?.length <= 1
    ) {
      setForward([...forward, {...player, position: 'forward'}]);
    }

    if (
      position.includes('G') &&
      guard?.some(el => {
        console.log(el.personId, player.personId);
        return el.personId !== player.personId;
      }) &&
      guard?.length <= 1
    ) {
      setGuard([...guard, {...player, position: 'guard'}]);
    }
  };

  const removePlayer = (playerId, position, index) => {
    console.log('*********');
    console.log('playerId: ', playerId);
    console.log('position: ', position);

    if (position.toLowerCase() === 'center') {
      setCenter([]);
    }

    let updatedForward;
    if (position.toLowerCase() === 'forward' && index === 1) {
      updatedForward = forward.shift();
      console.log(updatedForward.firstName);
      setForward([updatedForward]);
    } else {
      updatedForward = forward.pop();
      console.log(updatedForward.firstName);
      setForward([updatedForward]);
    }
    setForward([updatedForward]);

    if (position.toLowerCase() === 'guard' && guard.length === 1) {
      setGuard([]);
    } else {
      const guardPlayers = guard.filter(player => playerId !== player.personId);
      //console.log(guardPlayers);
      setGuard([guardPlayers]);
    }
  };

  const reset = () => {
    setPlayers(roster.league.standard);
  };

  const setPlayerPosition = player => {
    // setFantasyRoster({...fantasyRoster, objPosition: player});
  };

  const filterByPosition = position => {
    const filteredPlayers = players.filter(player =>
      player.pos.includes(position[0].toUpperCase()),
    );
    setPlayers(filteredPlayers);
  };

  return (
    <View style={styles.container}>
      <TeamNameCity />
      <TitleBorder title="Fantasy Roster" color={colors.mediumGrey} />
      <FantasyRoster
        center={center}
        forward={forward}
        guard={guard}
        removePlayer={removePlayer}
      />
      <TitleBorder
        title="Select Your Team Members Below"
        color={colors.mediumGrey}
      />
      <PlayerList
        players={players}
        positions={positions}
        setPlayerPosition={setPlayerPosition}
        filterByPosition={filterByPosition}
        reset={reset}
        addPlayer={addPlayer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    flex: 1,
  },
});

export default MainScreen;
