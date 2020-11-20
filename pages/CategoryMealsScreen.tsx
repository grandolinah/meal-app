import React from 'react';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

import { AppStateInterface } from '../interfaces/store-interface';

const CategoryMealsScreen = ({ route, navigation }) => {
  const filter = useSelector((state: AppStateInterface) => state.meals.filters);

  const categoryId = route.params?.categoryId ?? '';

  const filteredMealsByCategory = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId),
  );

  let filteredMeals;

  if (
    !filter.isGlutenFree &&
    !filter.isLactoseFree &&
    !filter.isVegan &&
    !filter.isVegetarian
  ) {
    filteredMeals = filteredMealsByCategory;
  } else {
    if (filter.isGlutenFree) {
      filteredMeals = filteredMealsByCategory.filter(
        (meal) => meal.isGlutenFree === filter.isGlutenFree,
      );
    }

    if (filter.isLactoseFree) {
      filteredMeals = filteredMealsByCategory.filter(
        (meal) => meal.isLactoseFree === filter.isLactoseFree,
      );
    }

    if (filter.isVegan) {
      filteredMeals = filteredMealsByCategory.filter(
        (meal) => meal.isVegan === filter.isVegan,
      );
    }

    if (filter.isVegetarian) {
      filteredMeals = filteredMealsByCategory.filter(
        (meal) => meal.isVegetarian === filter.isVegetarian,
      );
    }
  }

  return <MealList list={filteredMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
