import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FilterScreen from '../screens/FilterScreen';
import TabNavigation from '../navigation/TabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
      <Drawer.Screen name="Filter" component={FilterScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
