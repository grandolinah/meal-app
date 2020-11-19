import { MEALS } from '../../data/dummy-data';

import { TOGGLE_FAVORITE, UPDATE_FILTERS } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filters: {
    isGlutenFree: false,
    isLactoseFree: false,
    isVegan: false,
    isVegetarian: false,
  },
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId,
      );

      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];

        updatedFavMeals.splice(existingIndex, 1);

        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);

        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          isGlutenFree: action.filter.isGlutenFree,
          isLactoseFree: action.filter.isLactoseFree,
          isVegan: action.filter.isVegan,
          isVegetarian: action.filter.isVegetarian,
        }
      }
    default:
      return state;
  }
};

export default mealReducer;
