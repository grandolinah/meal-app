export interface FavoritesItemInterface {
  id: string;
  value: string;
}

export interface FilterInterface {
  isGlutenFree: boolean;
  isLactoseFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
}

export type AppContextType = {
  favorites: FavoritesItemInterface[];
  setFavorites: (favorites: any) => void;
  filter: {
    isGlutenFree: boolean;
    isLactoseFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
  };
  setFilter: (filter: any) => void;
};
