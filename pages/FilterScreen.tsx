import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import DefaultBoldText from '../components/DefaultBoldText';
import FilterSwitch from '../components/FilterSwitch';

import AppContext from '../AppContext';

const FilterScreen = () => {
  const { filter, setFilter } = useContext(AppContext);

  return (
    <View style={styles.screen}>
      <DefaultBoldText style={styles.title}>Available filters:</DefaultBoldText>
      <FilterSwitch
        title="Gluten-free"
        value={filter.isGlutenFree}
        onValueChange={(newValue: boolean) =>
          setFilter({
            isGlutenFree: newValue,
            isLactoseFree: filter.isLactoseFree,
            isVegan: filter.isVegan,
            isVegetarian: filter.isVegetarian,
          })
        }
      />
      <FilterSwitch
        title="Lactose-free"
        value={filter.isLactoseFree}
        onValueChange={(newValue: boolean) =>
          setFilter({
            isGlutenFree: filter.isGlutenFree,
            isLactoseFree: newValue,
            isVegan: filter.isVegan,
            isVegetarian: filter.isVegetarian,
          })
        }
      />
      <FilterSwitch
        title="Vegan"
        value={filter.isVegan}
        onValueChange={(newValue: boolean) =>
          setFilter({
            isGlutenFree: filter.isGlutenFree,
            isLactoseFree: filter.isLactoseFree,
            isVegan: newValue,
            isVegetarian: filter.isVegetarian,
          })
        }
      />
      <FilterSwitch
        title="Vegetarian"
        value={filter.isVegetarian}
        onValueChange={(newValue: boolean) =>
          setFilter({
            isGlutenFree: filter.isGlutenFree,
            isLactoseFree: filter.isLactoseFree,
            isVegan: filter.isVegan,
            isVegetarian: newValue,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  title: {
    margin: 20,
    textAlign: 'center',
    fontSize: 22,
  },
});

export default FilterScreen;
