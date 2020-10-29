import React from 'react';

import { View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {
  const categoryId = props.route.params?.categoryId ?? 'defaultValue';

  const displayedMeals = MEALS.filter((meals) =>
    meals.categoryIds.indexOf(categoryId),
  );

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        data={itemData}
        onSelectMeal={() => props.navigation.navigate('MealDetail', {
          item: itemData.item,
        })}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={styles.container}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selected = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: selected.title,
  };
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
