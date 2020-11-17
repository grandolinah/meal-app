import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

import { centerAlignedContent } from '../styles/align-center';

const STORAGE_KEY_FAVORITES = '@favorites';

const FavoritesScreen = ({ navigation }) => {
  const [fav, setFav] = useState<any[]>([]);

  const getFavoritesIds = async () => {
    try {
      const array = await AsyncStorage.getItem(STORAGE_KEY_FAVORITES);

      if (array !== null) {
        const displayedMeals = [];

        JSON.parse(array).forEach((item) => {
          let mealItem = MEALS.find(meal => meal.id === item.value);

          displayedMeals.push(mealItem);
        });

        setFav(displayedMeals);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    getFavoritesIds();
  });

  if (fav.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText>No favorites</DefaultText>
      </View>
    );
  } else {
    return <MealList navigation={navigation} list={fav} />
  }
};

const styles = StyleSheet.create({
  screen: {
    ...centerAlignedContent,
  },
});

export default FavoritesScreen;
