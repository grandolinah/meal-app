export interface AppStateInterface {
  meals: {
    filters: {
      isGlutenFree: boolean;
      isLactoseFree: boolean;
      isVegan: boolean;
      isVegetarian: boolean;
    },
    favoriteMeals: [],
  };
}
