import React from 'react';
import { View, StyleSheet, Switch, Platform } from 'react-native';

import DefaultText from '../components/DefaultText';

import { COLORS } from '../config/colors';

// TODO interface
const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText style={styles.filterName}>{props.title}</DefaultText>
      <Switch
        value={props.value}
        onValueChange={(newValue) => props.onValueChange(newValue)}
        trackColor={{ true: COLORS.violetRed }}
        thumbColor={Platform.OS === 'android' ? COLORS.violetRed : ''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  filterName: {
    fontSize: 20,
  },
});

export default FilterSwitch;
