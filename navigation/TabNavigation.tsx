import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

import FavoritesScreen from '../pages/FavoritesScreen';
import MealDetailScreen from '../pages/MealDetailScreen';
import CategoriesScreen from '../pages/CategoriesScreen';
import CategoryMealsScreen from '../pages/CategoryMealsScreen';

import CustomIconButton from '../components/CustomIconButton';

import { COLORS } from '../config/colors';

import {
  FavoritesNavigationParamList,
  MealNavigationParamList,
} from '../interfaces/navigation-types';

const drawerButtonOptions = (navigation: any) => {
  return {
    headerLeft: () => (
      <CustomIconButton
        icon="ios-menu"
        onPressed={() => {
          navigation.toggleDrawer();
        }}
      />
    ),
  };
};

const MealStack = createStackNavigator<MealNavigationParamList>();

const MealNavigation = () => {
  const [icon, setIcon] = useState('ios-star-outline');
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.meals.favoriteMeals);
  // TODO if its fav?

  return (
    <MealStack.Navigator
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
      <MealStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({ navigation }) => drawerButtonOptions(navigation)}
      />
      <MealStack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          headerTitle: route.params.title,
          headerTitleAlign: 'center',
        })}
      />
      <MealStack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params.item.title,
          headerTitleAlign: 'center',
          headerRight: () => (
            <CustomIconButton
              onPressed={() => {
                dispatch(toggleFavorite(route.params.item.id));
                setIcon(icon === 'ios-star' ? 'ios-star-outline' : 'ios-star');
              }}
              icon={icon}
            />
          ),
        })}
      />
    </MealStack.Navigator>
  );
};

const FavoritesStack = createStackNavigator<FavoritesNavigationParamList>();

const FavoritesNavigation = () => {
  const dispatch = useDispatch();

  return (
    <FavoritesStack.Navigator
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
      <FavoritesStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ navigation }) => drawerButtonOptions(navigation)}
      />
      <FavoritesStack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route, navigation }) => ({
          headerTitle: route.params.item.title,
          headerTitleAlign: 'center',
          headerRight: () => (
            <CustomIconButton
              onPressed={() => {
                dispatch(toggleFavorite(route.params.item.id));

                navigation.navigate('Favorites');
              }}
              icon="ios-trash"
            />
          ),
        })}
      />
    </FavoritesStack.Navigator>
  );
};

let Tab;

if (Platform.OS === 'android') {
  Tab = createMaterialBottomTabNavigator();
} else {
  Tab = createBottomTabNavigator();
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName: string;

    if (route.name === 'Meals') {
      iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline';
    } else if (route.name === 'Favorites') {
      iconName = focused ? 'ios-star' : 'ios-star-outline';
    }

    return (
      <Text
        style={{
          fontFamily: 'Montserrat-Bold',
        }}>
        <Icon name={iconName} size={size} color={color} />
      </Text>
    );
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
        labelStyle: {
          fontFamily: 'Montserrat-Bold',
        },
      }}>
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
      shifting={true}>
      <Tab.Screen
        name="Meals"
        component={MealNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Favorites" component={FavoritesNavigation} />
    </Tab.Navigator>
  );

  return Platform.OS === 'android' ? androidTabNavigator : iosTabNavigator;
};

export default TabNavigation;
