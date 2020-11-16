import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import FavoritesScreen from '../pages/FavoritesScreen';
import MealDetailScreen from '../pages/MealDetailScreen';

import CustomIconButton from '../components/CustomIconButton';

import { COLORS } from '../config/colors';

const Stack = createStackNavigator();

const FavoritesNavigation = ({ route, navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Favorites',
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
        name="Favorites"
        component={FavoritesScreen}
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
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params.item.title,
          headerTitleAlign: 'center',
          headerRight: () => (
            <CustomIconButton
              onPressed={() => {
                console.log(route.params.item.id)
                // addToFavorites(route.params.item.id);
                // TODO
              }}
              icon="ios-star"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;