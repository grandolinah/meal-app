import React from 'react';
import { MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';

const CategoryMealsScreen = ({ route, navigation }) => {
  const categoryId = route.params?.categoryId ?? 'defaultValue';

  // TODO interface
  const displayedMeals = MEALS.filter((meals) =>
    meals.categoryIds.indexOf(categoryId),
  );

  return (
    <MealList list={displayedMeals} />
  );
};

export default CategoryMealsScreen;
