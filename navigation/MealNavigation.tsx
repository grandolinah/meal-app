import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CategoriesScreen from '../pages/CategoriesScreen';
import CategoryMealsScreen from '../pages/CategoryMealsScreen';
import MealDetailScreen from '../pages/MealDetailScreen';

import CustomIconButton from '../components/CustomIconButton';

import { COLORS } from '../config/colors';

const STORAGE_KEY_FAVORITES = '@favorites';

type MealNavigationParamList = {
  CategoryMeals: {
    title: string
  };
  Categories: {};
  MealDetail: {
    item: {
      title: string;
      id: string;
    }
  }
};

const Stack = createStackNavigator<MealNavigationParamList>();

const MealNavigation = ({ route, navigation }) => {
  const [fav, setFav] = useState<any[]>([]);

  console.log(fav);
  const addToFavorites = (id: string): void => {
    let isAlreadyFav = fav.filter((item) => item.value === id);

    console.log(isAlreadyFav);
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
      return currentFavs.filter((item) => item.value !== id);
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
          fontFamily: 'Montserrat-Bold',
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? COLORS.violetRed : COLORS.pinkLace,
        },
        headerTintColor:
          Platform.OS === 'android' ? COLORS.white : COLORS.pinkLace,
      }}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={() => ({
          headerLeft: () => (
            <CustomIconButton
              icon="ios-menu"
              onPressed={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        })}
      />
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
            <CustomIconButton
              onPressed={() => {
                addToFavorites(route.params.item.id);
              }}
              icon="ios-star"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default MealNavigation;
