import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { MealInterface } from '../interfaces/meal-interface';

import MealItem from './MealItem';

const MealList = ({ navigation, list}) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        data={item}
        onSelectMeal={() => navigation.navigate('MealDetail', {
          item: item,
          params: {
            title: item.title,
          },
        })}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
  },
});

export default MealList;
