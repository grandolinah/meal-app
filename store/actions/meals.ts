export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (id: string) => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id,
  };
};

export const UPDATE_FILTERS = 'UPDATE_FILTERS';

export const updateFilters = (
  isGlutenFree: boolean,
  isLactoseFree: boolean,
  isVegetarian: boolean,
  isVegan: boolean,
) => {
  return {
    type: UPDATE_FILTERS,
    filter: {
      isGlutenFree,
      isLactoseFree,
      isVegetarian,
      isVegan,
    },
  };
};
