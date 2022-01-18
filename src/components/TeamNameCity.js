import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import GeneralButton from './GeneralButton';
import colors from '../themes/colors';

const TeamNameCity = () => {
  const [teamName, setTeamName] = useState('');
  const [teamCity, setTeamCity] = useState('');
  const [isSet, setIsSet] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {isSet ? (
          <Text style={{...styles.input, ...styles.text}}>
            {`${teamName.charAt(0).toUpperCase()}${teamName.slice(1)}`}
          </Text>
        ) : (
          <TextInput
            style={styles.input}
            onChangeText={teamName => setTeamName(teamName)}
            value={teamName}
            placeholder="Set Team Name"
          />
        )}
        {isSet ? (
          <Text style={{...styles.input, ...styles.text}}>
            {`${teamCity.charAt(0).toUpperCase()}${teamCity.slice(1)}`}
          </Text>
        ) : (
          <TextInput
            style={styles.input}
            onChangeText={teamCity => setTeamCity(teamCity)}
            value={teamCity}
            placeholder="Set Team City"
          />
        )}
      </View>
      <GeneralButton
        title={isSet ? 'Edit' : 'Set'}
        color={colors.blue}
        onPress={() => setIsSet(!isSet)}
        style={styles.buttonStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    height: 80,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    marginLeft: 2,
  },
  input: {
    fontSize: 16,
    borderColor: colors.mediumGrey,
    borderWidth: 1,
    width: '40%',
    marginRight: 10,
    paddingVertical: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
    borderWidth: 0,
  },
  buttonStyles: {
    position: 'absolute',
    right: '5%',
  },
});

export default TeamNameCity;
