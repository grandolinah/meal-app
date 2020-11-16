import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { COLORS } from '../config/colors';

import {CustomIconButtonInterface} from '../interfaces/custom-icon-button-interface';

const CustomIconButton = ({ onPressed, icon }: CustomIconButtonInterface) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onPressed();
        }}>
        <Icon
          name={icon}
          size={30}
          color={Platform.OS === 'android' ? COLORS.white : COLORS.violetRed}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});

export default CustomIconButton;
