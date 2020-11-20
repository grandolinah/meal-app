import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps
} from '@react-navigation/drawer';
import { Platform, TouchableOpacity, StyleSheet } from 'react-native';

import FilterScreen from '../pages/FilterScreen';

import TabNavigation from '../navigation/TabNavigation';

import DefaultBoldText from '../components/DefaultBoldText';

import { COLORS } from '../config/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
      <DrawerContentScrollView {...props}>
        <TouchableOpacity
          style={styles.buttonBox}
          onPress={() => props.navigation.navigate('Back')}>
          <DefaultBoldText style={styles.titleBack}>Back</DefaultBoldText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBox}
          onPress={() => props.navigation.navigate('Filter')}>
          <DefaultBoldText style={styles.title}>Set Filters</DefaultBoldText>
        </TouchableOpacity>
      </DrawerContentScrollView>
    );
  };

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
      }}
      drawerStyle={{
        backgroundColor:
          Platform.OS === 'android' ? COLORS.violetRed : COLORS.pinkLace,
        width: 240,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Back"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Filter"
        component={FilterScreen}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    width: '100%',
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: COLORS.white,
  },
  titleBack: {
    fontSize: 20,
    color: COLORS.white,
  },
});

export default DrawerNavigation;
