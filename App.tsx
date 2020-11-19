import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DrawerNavigation from './navigation/DrawerNavigation';
import FavoritesContext from './FavoritesContext';

const STORAGE_KEY_FAVORITES = '@favorites';

const App: () => React.ReactNode = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [readStore, setReadStore] = useState<boolean>(false);

  const readData = async () => {
    try {
      const array = await AsyncStorage.getItem(STORAGE_KEY_FAVORITES);

      if (array !== null) {
        setFavorites(JSON.parse(array));
      }
    } catch (error) {
      Alert.alert('Error', 'The app was unable to read settings.');
    }
  };

  const storeData = async (array: any[], key: string) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(array));
    } catch (error) {
      // Error saving data
    }
  };

  useEffect(() => {
    if (readStore) {
      storeData(favorites, STORAGE_KEY_FAVORITES);
    }
  }, [favorites]);

  useEffect(() => {
    if (!readStore) {
      readData();
      setReadStore(true);
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </FavoritesContext.Provider>
    </>
  );
};

export default App;
