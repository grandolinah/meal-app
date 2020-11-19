import React from 'react';
import { MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';

const CategoryMealsScreen = ({ route, navigation }) => {
  const categoryId = route.params?.categoryId ?? '';

  const displayedMeals = MEALS.filter((meals) =>
    meals.categoryIds.includes(categoryId),
  );

  return <MealList list={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
