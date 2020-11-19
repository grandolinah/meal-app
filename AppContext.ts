import { createContext, useContext } from 'react';

import { AppContextType } from './interfaces/context-interface';

export const AppContext = createContext<AppContextType>({
  favorites: [],
  setFavorites: (favorites) => favorites,
  filter: {
    isGlutenFree: false,
    isLactoseFree: false,
    isVegan: false,
    isVegetarian: false,
  },
  setFilter: (filter) => filter,
});

export const useFavorites = () => useContext(AppContext);

export default AppContext;
