import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, TouchableOpacity, Platform, ViewStyle } from 'react-native';

import { COLORS } from '../config/colors';

import { CustomIconButtonInterface } from '../interfaces/components-interface';

import { centerAlignedContent } from '../styles/align-center';

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
    ...centerAlignedContent,
    marginHorizontal: 10,
  } as ViewStyle,
});

export default CustomIconButton;
