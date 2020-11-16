import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const FavoritesScreen = ({ navigation }) => {
  let list = ['m1']; // TODO dummy

  const displayedMeals = MEALS.filter((meals) =>
    meals.id === list[0],
  );

  return (
    <MealList navigation={navigation} list={displayedMeals} />
  );
};

export default FavoritesScreen;
