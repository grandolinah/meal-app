import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { COLORS } from '../config/colors';

const STORAGE_KEY_FAVORITES = '@favorites';

const Stack = createStackNavigator();

const MealNavigation = ({ route }) => {
  const [fav, setFav] = useState<any[]>([]);

  console.log(fav);
  const addToFavorites = (id: string): void => {
    let isAlreadyFav = fav.filter(item => item.value === id);
    // console.log(isAlreadyFav);
    if (isAlreadyFav.length === 0) {
      setFav((currentFavs: any[]) => [
        ...currentFavs,
        { id: Math.random().toString(), value: id },
      ]);
    } else {
      removeFav(id);
    }
  };

  const removeFav = (id: string): void => {
    setFav((currentFavs: any[]) => {
      return currentFavs.filter(
        (item) => item.value !== id,
      );
    });

    removeItem(id);
  };

  const storeData = async (array, key) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(array));
    } catch (error) {
      // Error saving data
    }
  };

  const getFavoritesIds = async () => {
    try {
      const array = await AsyncStorage.getItem(STORAGE_KEY_FAVORITES);

      if (array !== null) {
        setFav(JSON.parse(array));
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const removeItem = async (key: any) => {
    try {
      await AsyncStorage.removeItem(key);

      Alert.alert('Removed from favorite meals', 'Removed from favorite meals');
    } catch (error) {
      Alert.alert('Error', 'The app was unable to remove from favorites.');
    }
  };

  useEffect(() => {
    getFavoritesIds();
  }, []);

  useEffect(() => {
    storeData(fav, STORAGE_KEY_FAVORITES);
  }, [fav]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Meal Categories',
        headerTitleStyle: {
          color: COLORS.white,
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? COLORS.violetRed : COLORS.pinkLace,
        },
        headerTintColor:
          Platform.OS === 'android' ? COLORS.white : COLORS.pinkLace,
      }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          headerTitle: route.params.title,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params.item.title,
          headerTitleAlign: 'center',
          headerRight: () => (
            <CustomHeaderButton
              onPressed={() => {
                addToFavorites(route.params.item.id);
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default MealNavigation;
