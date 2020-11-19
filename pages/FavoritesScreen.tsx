import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

import AppContext from '../AppContext';

import { centerAlignedContent } from '../styles/align-center';

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(AppContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    const displayedMeals = [];

    if (favorites) {
      favorites.forEach((item) => {
        let mealItem = MEALS.find((meal) => meal.id === item.value);

        displayedMeals.push(mealItem);
      });

      setList(displayedMeals);
    }
  }, [favorites]);

  if (list.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText>No favorites</DefaultText>
      </View>
    );
  } else {
    return <MealList navigation={navigation} list={list} />;
  }
};

const styles = StyleSheet.create({
  screen: {
    ...centerAlignedContent,
  } as ViewStyle,
});

export default FavoritesScreen;
