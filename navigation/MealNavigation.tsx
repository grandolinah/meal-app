import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CategoriesScreen from '../pages/CategoriesScreen';
import CategoryMealsScreen from '../pages/CategoryMealsScreen';
import MealDetailScreen from '../pages/MealDetailScreen';

import CustomIconButton from '../components/CustomIconButton';

import { COLORS } from '../config/colors';

import { toggleFavorite } from '../store/actions/meals';

type MealNavigationParamList = {
  CategoryMeals: {
    title: string;
  };
  Categories: {};
  MealDetail: {
    item: {
      title: string;
      id: string;
    };
  };
};

const Stack = createStackNavigator<MealNavigationParamList>();

// TODO types
const MealNavigation = ({ route, navigation }) => {
  const [currentRoute, setCurrentRoute] = useState('');
  const [icon, setIcon] = useState('ios-star-outline');

  const dispatch = useDispatch();
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  // TODO
  const toggleFavoriteHandler = (mealId: string) => {
    dispatch(toggleFavorite(mealId));
  };

  useState(() => {
    const isFavorite = favoriteMeals.find((meal) => meal.id === currentRoute);

    if (isFavorite) {
      setIcon('ios-star');
    }
  });

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
                setCurrentRoute(route.params.item.id);
                // TODO set fav
                setIcon(icon === 'ios-star' ? 'ios-star-outline' : 'ios-star');
              }}
              icon={icon}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default MealNavigation;
