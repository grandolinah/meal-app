import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform, Text, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FavoritesScreen from '../pages/FavoritesScreen';
import MealDetailScreen from '../pages/MealDetailScreen';
import CategoriesScreen from '../pages/CategoriesScreen';
import CategoryMealsScreen from '../pages/CategoryMealsScreen';

import CustomIconButton from '../components/CustomIconButton';

import { COLORS } from '../config/colors';

const STORAGE_KEY_FAVORITES = '@favorites';

// TODO !!!repeat code
// TODO interfaces
type FavoritesNavigationParamList = {
  MealDetail: {
    item: {
      title: string;
      id: string;
      icon: string;
    };
  };
  Favorites: {};
};

type MealNavigationParamList = {
  CategoryMeals: {
    title: string;
  };
  Categories: {};
  MealDetail: {
    item: {
      title: string;
      id: string;
      icon: string;
    };
  };
};

const storeData = async (array, key) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(array));
  } catch (error) {
    // Error saving data
  }
};

const MealStack = createStackNavigator<MealNavigationParamList>();

const MealNavigation = ({ navigation }) => {
  const [fav, setFav] = useState<any[]>([]);
  // TODO interface and icon

  const toggleFavorite = (id: string): void => {
    let isAlreadyFav = fav.filter((item) => item.value === id);

    if (isAlreadyFav.length === 0) {
      setFav((currentFavs: any[]) => [
        ...currentFavs,
        { id: Math.random().toString(), value: id },
      ]);
      Alert.alert('Added to favorite meals', 'Added to  favorite meals');
    } else {
      removeFav(id);
    }
  };

  const removeFav = (id: string): void => {
    setFav((currentFavs: any[]) => {
      return currentFavs.filter((item) => item.value !== id);
    });

    removeItem(id);
  };

  const getFavoritesIds = async () => {
    try {
      const array = await AsyncStorage.getItem(STORAGE_KEY_FAVORITES);

      if (array !== null) {
        setFav(JSON.parse(array));
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const removeItem = async (key: any) => {
    try {
      await AsyncStorage.removeItem(key);

      Alert.alert('Removed from favorite meals', 'Removed from favorite meals');
    } catch (error) {
      Alert.alert('Error', 'The app was unable to remove from favorites.');
    }
  };

  useEffect(() => {
    getFavoritesIds();
  });

  useEffect(() => {
    storeData(fav, STORAGE_KEY_FAVORITES);
  }, [fav]);

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
            <CustomIconButton onPressed={() => {}} icon="ios-star" />
          ),
        })}
      />
    </MealStack.Navigator>
  );
};

const FavoritesStack = createStackNavigator<FavoritesNavigationParamList>();

const FavoritesNavigation = ({ navigation }) => {
  const [fav, setFav] = useState<any[]>([]);
  // TODO interface and icon

  const toggleFavorit = (id: string): void => {
    let isAlreadyFav = fav.filter((item) => item.value === id);

    if (isAlreadyFav.length === 0) {
      setFav((currentFavs: any[]) => [
        ...currentFavs,
        { id: Math.random().toString(), value: id },
      ]);
      Alert.alert('Added to favorite meals', 'Added to  favorite meals');
    } else {
      removeFav(id);
    }
  };

  const removeFav = (id: string): void => {
    setFav((currentFavs: any[]) => {
      return currentFavs.filter((item) => item.value !== id);
    });

    removeItem(id);
  };

  const getFavoritesIds = async () => {
    try {
      const array = await AsyncStorage.getItem(STORAGE_KEY_FAVORITES);

      if (array !== null) {
        setFav(JSON.parse(array));
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const removeItem = async (key: any) => {
    try {
      await AsyncStorage.removeItem(key);

      Alert.alert('Removed from favorite meals', 'Removed from favorite meals');
    } catch (error) {
      Alert.alert('Error', 'The app was unable to remove from favorites.');
    }
  };

  useEffect(() => {
    getFavoritesIds();
  }, []);

  useEffect(() => {
    storeData(fav, STORAGE_KEY_FAVORITES);
  }, [fav]);

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
      <FavoritesStack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params.item.title,
          headerTitleAlign: 'center',
          headerRight: () => (
            <CustomIconButton
              onPressed={() => {
                toggleFavorit(route.params.item.id);
              }}
              icon="ios-star"
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
