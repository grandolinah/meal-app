import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform, Text, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import FavoritesScreen from '../pages/FavoritesScreen';
import MealDetailScreen from '../pages/MealDetailScreen';
import CategoriesScreen from '../pages/CategoriesScreen';
import CategoryMealsScreen from '../pages/CategoryMealsScreen';

import AppContext from '../AppContext';

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
  const { favorites, setFavorites } = useContext(AppContext);

  const toggleFavorite = (id: string): void => {
    const isAlreadyFavorite = favorites.filter((item) => item.value === id);

    if (isAlreadyFavorite.length === 0) {
      setFavorites((currentFavs: any) => [
        ...currentFavs,
        { id: Math.random().toString(), value: id },
      ]);

      Alert.alert('Added to favorite meals', 'Added to favorite meals');
    } else {
      removeFavorite(id);
      Alert.alert('Removed from favorite meals', 'Removed from favorite meals');
    }
  };

  const removeFavorite = (id: string): void => {
    setFavorites((currentFavs: any) => {
      return currentFavs.filter((item) => item.value !== id);
    });
  };

  const checkIfFavorite = (id: string) => {
    const isAlreadyFavorite = favorites.filter((item) => item.value === id);

    return isAlreadyFavorite.length === 0 ? false : true;
  };

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
                toggleFavorite(route.params.item.id);
              }}
              icon={checkIfFavorite(route.params.item.id) ? 'ios-star' : 'ios-star-outline'}
            />
          ),
        })}
      />
    </MealStack.Navigator>
  );
};

const FavoritesStack = createStackNavigator<FavoritesNavigationParamList>();

const FavoritesNavigation = () => {
  const { setFavorites } = useContext(AppContext);

  const removeFavorite = (id: string): void => {
    setFavorites((currentFavs: any[]) => {
      return currentFavs.filter((item) => item.value !== id);
    });
  };

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
                removeFavorite(route.params.item.id);

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
