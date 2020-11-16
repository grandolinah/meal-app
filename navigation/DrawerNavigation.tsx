import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';

import FilterScreen from '../pages/FilterScreen';

import TabNavigation from '../navigation/TabNavigation';

import { COLORS } from '../config/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
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
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Filter" component={FilterScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
