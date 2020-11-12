import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import { COLORS } from '../config/colors';

const Stack = createStackNavigator();

const FavoritesNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Favorites Categories',
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
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;
