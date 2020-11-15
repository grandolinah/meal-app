import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DefaultBoldText from '../components/DefaultBoldText';
import FilterSwitch from '../components/FilterSwitch';

const STORAGE_KEY_IS_GLUTEN_FREE = '@save_filter_gluten';
const STORAGE_KEY_IS_LACTOSE_FREE = '@save_filter_lactose';
const STORAGE_KEY_IS_VEGAN = '@save_filter_vegan';
const STORAGE_KEY_IS_VEGETARIAN = '@save_filter_vegetarian';

const FilterScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isDataRead, setIsDataRead] = useState(false);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_IS_GLUTEN_FREE, JSON.stringify(isGlutenFree));
      await AsyncStorage.setItem(STORAGE_KEY_IS_LACTOSE_FREE, JSON.stringify(isLactoseFree));
      await AsyncStorage.setItem(STORAGE_KEY_IS_VEGAN, JSON.stringify(isVegan));
      await AsyncStorage.setItem(STORAGE_KEY_IS_VEGETARIAN, JSON.stringify(isVegetarian));
    } catch (error) {
      Alert.alert('Error', 'The app was unable to store filter.');
    }
  };

  const readData = async () => {
    try {
      const gluten = await AsyncStorage.getItem(STORAGE_KEY_IS_GLUTEN_FREE);

      if (gluten) {
        setIsGlutenFree(gluten === 'true' ? true : false);
      }

      const lactose = await AsyncStorage.getItem(STORAGE_KEY_IS_LACTOSE_FREE);

      if (lactose) {
        setIsLactoseFree(lactose === 'true' ? true : false);
      }

      const vegan = await AsyncStorage.getItem(STORAGE_KEY_IS_VEGAN);

      if (vegan) {
        setIsVegan(vegan === 'true' ? true : false);
      }

      const vegetarian = await AsyncStorage.getItem(STORAGE_KEY_IS_VEGETARIAN);

      if (vegetarian) {
        setIsVegetarian(vegetarian === 'true' ? true : false);
      }
    } catch (error) {
      Alert.alert('Error', 'The app was unable to read filter.');
    }
  };

  useEffect(() => {
    if (!isDataRead) {
      readData();
      setIsDataRead(true);
    }
  });

  useEffect(() => {
    storeData();
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  return (
    <View style={styles.screen}>
      <DefaultBoldText style={styles.title}>Available filters:</DefaultBoldText>
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
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});

export default FilterScreen;
