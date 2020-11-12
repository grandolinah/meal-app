import React from 'react';
import { MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';

const FavoritesScreen = ({ route, navigation }) => {
  const categoryId = route.params?.categoryId ?? 'defaultValue';

  // TODO favroites screen
  const displayedMeals = MEALS.filter((meals) =>
    meals.categoryIds.indexOf(categoryId),
  );

  return (
    <MealList list={displayedMeals} />
  );
};

export default FavoritesScreen;
