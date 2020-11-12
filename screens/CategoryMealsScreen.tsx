import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ route, navigation }) => {
  const categoryId = route.params?.categoryId ?? 'defaultValue';

  // TODO interface
  const displayedMeals = MEALS.filter((meals) =>
    meals.categoryIds.indexOf(categoryId),
  );

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
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item: any) => item.id} // TODO interface
        renderItem={renderMealItem}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
  },
});

export default CategoryMealsScreen;
