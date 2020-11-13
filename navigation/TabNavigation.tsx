import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

import MealNavigation from './MealNavigation';
import FavoritesNavigation from '../navigation/FavoritesNavigation';

import { COLORS } from '../config/colors';

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName: string;

    if (route.name === 'Meals') {
      iconName = focused
        ? 'ios-restaurant'
        : 'ios-restaurant-outline';
    } else if (route.name === 'Favorites') {
      iconName = focused ? 'ios-star' : 'ios-star-outline';
    }

    return <Icon name={iconName} size={size} color={color} />;
  },
});

const TabNavigation = () => {
  const iosTabNavigator = (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: COLORS.violetRed,
        inactiveTintColor: COLORS.ash,
        keyboardHidesTabBar: true,
        labelPosition: 'below-icon',
      }}
    >
      <Tab.Screen name="Meals" component={MealNavigation} />
      <Tab.Screen name="Favorites" component={FavoritesNavigation} />
    </Tab.Navigator>
  );

  const androidTabNavigator = (
    <Tab.Navigator
      screenOptions={screenOptions}
      activeColor={COLORS.white}
      inactiveColor={COLORS.ash}
      barStyle={{ backgroundColor: COLORS.violetRed }}
    >
      <Tab.Screen name="Meals" component={MealNavigation} options={{ headerShown: false }} />
      <Tab.Screen name="Favorites" component={FavoritesNavigation} />
    </Tab.Navigator>
  );

  return Platform.OS === 'android' ? androidTabNavigator : iosTabNavigator;
};

export default TabNavigation;
