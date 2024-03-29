import React from 'react';
import { View, StyleSheet, FlatList, ViewStyle } from 'react-native';

import { MealInterface, MealListInterface } from '../interfaces/meal-interface';

import MealItem from './MealItem';

import { centerAlignedContent } from '../styles/align-center';

const MealList = ({ navigation, list } : MealListInterface) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        data={item}
        onSelectMeal={() =>
          navigation.navigate('MealDetail', {
            item: item,
            params: {
              title: item.title,
            },
          })
        }
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        image={item.imageUrl}
        affordability={item.affordability}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={list}
        keyExtractor={(item: MealInterface) => item.id}
        renderItem={renderMealItem}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    ...centerAlignedContent,
  } as ViewStyle,
  container: {
    width: '100%',
  },
});

export default MealList;
