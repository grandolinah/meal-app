import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MealItem from './MealItem';

// TODo inteface
const MealList = (props) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        data={item}
        onSelectMeal={() => props.navigation.navigate('MealDetail', {
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
        data={props.list}
        keyExtractor={(item: any) => item.id} // TODO interface
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
