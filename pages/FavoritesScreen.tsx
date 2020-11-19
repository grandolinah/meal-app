import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

import { centerAlignedContent } from '../styles/align-center';

const FavoritesScreen = ({ navigation }) => {
  const favorites = useSelector((state) => state.meals.favoriteMeals);

  if (favorites.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText>No favorites</DefaultText>
      </View>
    );
  } else {
    return <MealList navigation={navigation} list={favorites} />;
  }
};

const styles = StyleSheet.create({
  screen: {
    ...centerAlignedContent,
  } as ViewStyle,
});

export default FavoritesScreen;
