import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const FavoritesScreen = ({ navigation }) => {
  let list = ['m1']; // TODO dummy

  const displayedMeals = MEALS.filter((meals) =>
    meals.id === list[0],
  );

  return (
    <View style={{ flex: 1, }}>
      <MealList navigation={navigation} list={displayedMeals} />
    </View>
  );
};

export default FavoritesScreen;
