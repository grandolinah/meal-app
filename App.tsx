import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DrawerNavigation from './navigation/DrawerNavigation';

import AppContext from './AppContext';

import { FavoritesItemInterface, FilterInterface } from './interfaces/context-interface';

const STORAGE_KEY_FAVORITES = '@save_favorites';
const STORAGE_KEY_IS_GLUTEN_FREE = '@save_filter_gluten';
const STORAGE_KEY_IS_LACTOSE_FREE = '@save_filter_lactose';
const STORAGE_KEY_IS_VEGAN = '@save_filter_vegan';
const STORAGE_KEY_IS_VEGETARIAN = '@save_filter_vegetarian';

const App: () => React.ReactNode = () => {
  const [favorites, setFavorites] = useState<FavoritesItemInterface[]>([]);
  const [isDataRead, setIsDataRead] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterInterface>({
    isGlutenFree: false,
    isLactoseFree: false,
    isVegan: false,
    isVegetarian: false,
  });

  const readData = async () => {
    try {
      const array = await AsyncStorage.getItem(STORAGE_KEY_FAVORITES);

      if (array !== null) {
        setFavorites(JSON.parse(array));
      }

      const gluten = await AsyncStorage.getItem(STORAGE_KEY_IS_GLUTEN_FREE);
      const lactose = await AsyncStorage.getItem(STORAGE_KEY_IS_LACTOSE_FREE);
      const vegan = await AsyncStorage.getItem(STORAGE_KEY_IS_VEGAN);
      const vegetarian = await AsyncStorage.getItem(STORAGE_KEY_IS_VEGETARIAN);

      if (gluten && lactose && vegan && vegetarian) {
        setFilter({
          isGlutenFree: gluten === 'true' ? true : false,
          isLactoseFree: lactose === 'true' ? true : false,
          isVegan: vegan === 'true' ? true : false,
          isVegetarian: vegetarian === 'true' ? true : false
        });
      }
    } catch (error) {
      Alert.alert('Error', 'The app was unable to read settings.');
    }
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favorites));

      await AsyncStorage.setItem(
        STORAGE_KEY_IS_GLUTEN_FREE,
        JSON.stringify(filter.isGlutenFree),
      );
      await AsyncStorage.setItem(
        STORAGE_KEY_IS_LACTOSE_FREE,
        JSON.stringify(filter.isLactoseFree),
      );
      await AsyncStorage.setItem(STORAGE_KEY_IS_VEGAN, JSON.stringify(filter.isVegan));
      await AsyncStorage.setItem(
        STORAGE_KEY_IS_VEGETARIAN,
        JSON.stringify(filter.isVegetarian),
      );
    } catch (error) {
      Alert.alert('Error', 'The app was unable to store settings.');
    }
  };

  useEffect(() => {
    if (isDataRead) {
      storeData();
    }
  }, [favorites, filter.isGlutenFree, filter.isLactoseFree, filter.isVegan, filter.isVegetarian]);

  useEffect(() => {
    if (!isDataRead) {
      readData();
      setIsDataRead(true);
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContext.Provider value={{ favorites, setFavorites, filter, setFilter }}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </AppContext.Provider>
    </>
  );
};

export default App;
