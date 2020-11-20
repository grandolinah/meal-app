import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilters } from '../store/actions/meals';

import I18n from '../locale/i18n';

import DefaultBoldText from '../components/DefaultBoldText';
import FilterSwitch from '../components/FilterSwitch';

import { AppStateInterface } from '../interfaces/store-interface';

const FilterScreen = () => {
  const filters = useSelector(
    (state: AppStateInterface) => state.meals.filters,
  );
  const dispatch = useDispatch();

  const [isGlutenFree, setIsGlutenFree] = useState(filters.isGlutenFree);
  const [isLactoseFree, setIsLactoseFree] = useState(filters.isLactoseFree);
  const [isVegan, setIsVegan] = useState(filters.isVegan);
  const [isVegetarian, setIsVegetarian] = useState(filters.isVegetarian);

  useEffect(() => {
    dispatch(updateFilters(isGlutenFree, isLactoseFree, isVegan, isVegetarian));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  return (
    <View style={styles.screen}>
      <DefaultBoldText style={styles.title}>
        {I18n.t('FilterScreen.title')}
      </DefaultBoldText>
      <FilterSwitch
        title="Gluten-free"
        value={isGlutenFree}
        onValueChange={(newValue: boolean) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        title="Lactose-free"
        value={isLactoseFree}
        onValueChange={(newValue: boolean) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        title="Vegan"
        value={isVegan}
        onValueChange={(newValue: boolean) => setIsVegan(newValue)}
      />
      <FilterSwitch
        title="Vegetarian"
        value={isVegetarian}
        onValueChange={(newValue: boolean) => setIsVegetarian(newValue)}
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
