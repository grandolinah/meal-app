import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { COLORS } from '../config/colors';

const CustomIconButton = (props) => {
  return <View style={styles.container}>
    <TouchableOpacity onPress={() => {
      props.onPressed()
    }}>
      <Icon name={props.icon} size={30} color={Platform.OS === 'android' ? COLORS.white : COLORS.violetRed} />
    </TouchableOpacity>
  </View>;
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
