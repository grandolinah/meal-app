import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import { COLORS } from '../config/colors';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTitle: 'Meal Categories',
      headerTitleStyle: {
        color: COLORS.white,
        alignSelf: 'center',
      },
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? COLORS.violetRed : COLORS.pinkLace,
      },
      headerTintColor: Platform.OS === 'android' ? COLORS.white : COLORS.pinkLace,
    }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
