import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { MealItemPropsInterface } from '../interfaces/meal-interface';

import DefaultBoldText from './DefaultBoldText';
import DefaultText from './DefaultText';

import { COLORS } from '../config/colors';

const MealItem = ({
  onSelectMeal,
  image,
  title,
  duration,
  complexity,
  affordability,
}: MealItemPropsInterface) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <DefaultBoldText style={styles.title}>{title}</DefaultBoldText>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetails }}>
            <DefaultText>{duration} min</DefaultText>
            <DefaultText>{complexity}</DefaultText>
            <DefaultText>{affordability}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: COLORS.wildSand,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 5,
  },
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
