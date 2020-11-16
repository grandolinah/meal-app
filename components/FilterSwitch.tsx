import React from 'react';
import { View, StyleSheet, Switch, Platform } from 'react-native';

import DefaultText from '../components/DefaultText';

import { FilterSwitchInterface } from '../interfaces/components-interface';

import { COLORS } from '../config/colors';

const FilterSwitch = ({
  title,
  value,
  onValueChange,
}: FilterSwitchInterface) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText style={styles.filterName}>{title}</DefaultText>
      <Switch
        value={value}
        onValueChange={(newValue) => onValueChange(newValue)}
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
