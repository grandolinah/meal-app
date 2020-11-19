import { createContext, useContext } from 'react';

export type FavoritesContextType = {
  favorites: any[];
  setFavorites: (favorites: any) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  setFavorites: (favorites) => favorites,
});

export const useFavorites = () => useContext(FavoritesContext);

export default FavoritesContext;
