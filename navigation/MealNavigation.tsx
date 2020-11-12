import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { COLORS } from '../config/colors';

const Stack = createStackNavigator();

const MealNavigation = ({ route }) => {

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
            <CustomHeaderButton onPress={() => {}} title={'meow'} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default MealNavigation;
