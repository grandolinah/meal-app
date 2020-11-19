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
      initialRouteName="Back"
      screenOptions={{
        headerTitle: 'Filters',
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
        name="Back"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Filter" component={FilterScreen} options={{ headerShown: true }}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
