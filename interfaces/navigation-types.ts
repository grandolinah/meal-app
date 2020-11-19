export type FavoritesNavigationParamList = {
  MealDetail: {
    item: {
      title: string;
      id: string;
      icon: string;
    };
  };
  Favorites: {};
};

export type MealNavigationParamList = {
  CategoryMeals: {
    title: string;
  };
  Categories: {};
  MealDetail: {
    item: {
      title: string;
      id: string;
      icon: string;
    };
  };
};
