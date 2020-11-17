import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { DefaultTextInterface } from '../interfaces/components-interface';

const DefaultBoldText = ({
  style,
  children,
  numberOfLines,
}: DefaultTextInterface) => {
  return (
    <Text style={{ ...style, ...styles.text }} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Bold',
  },
});

export default DefaultBoldText;
