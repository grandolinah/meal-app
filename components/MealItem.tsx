import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { COLORS } from '../config/colors';

import { MealItemPropsInterface } from '../interfaces/meal-interface';

const MealItem = ({ onSelectMeal, image, title, duration, complexity, affordability}: MealItemPropsInterface) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View style={styles.container}>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: image }}
              style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetails }}>
            <Text>{duration} min</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: COLORS.wildSand,
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {},
  row: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: COLORS.white,
    paddingVertical: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
});

export default MealItem;
