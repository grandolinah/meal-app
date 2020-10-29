import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CategoryGridItem from '../components/CategoryGridItem';
import { CATEGORIES } from '../data/dummy-data';

const CategorieMealsScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridItem
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            name: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
        color={itemData.item.color}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 22,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginVertical: 10,
    alignSelf: 'center',
  },
});

export default CategorieMealsScreen;
