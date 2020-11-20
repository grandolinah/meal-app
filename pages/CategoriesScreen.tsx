import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CategoryGridItem from '../components/CategoryGridItem';

import { CategoryItemInterface } from '../interfaces/category-interface';

import { CATEGORIES } from '../data/dummy-data';

const CategorieMealsScreen = ({ navigation }) => {
  const renderGridItem = ({ item } : {item: CategoryItemInterface}) => {
    return (
      <CategoryGridItem
        title={item.title}
        onSelect={() => {
          navigation.navigate({
            name: 'CategoryMeals',
            params: {
              categoryId: item.id,
              title: item.title,
            },
          });
        }}
        color={item.color}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item: CategoryItemInterface) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 22,
  },
});

export default CategorieMealsScreen;
