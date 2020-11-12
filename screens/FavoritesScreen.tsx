import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const FavoritesScreen = ({ route, navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>favorites screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
  },
});

export default FavoritesScreen;
