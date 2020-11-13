import React from 'react';
import { Text, StyleSheet } from 'react-native';

// TODO inteface
const DefaultBoldText = (props) => {
  return (
  <Text style={{...props.style, ...styles.text}}>{props.children}</Text >
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Bold',
  },
});

export default DefaultBoldText;
