import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ navigation, route }) => {
  const item = route.params.item;

  return (
    <View style={styles.screen}>
      <Text>{item.title}</Text>
      <Button
        title="go to home screen"
        onPress={() => {
          navigation.popToTop();
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
