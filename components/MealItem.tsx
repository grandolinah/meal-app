import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { COLORS } from '../config/colors';

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={styles.container}>
          <View View style={{ ...styles.row, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {props.title}numberOfLines={1}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetails }}>
            <Text>{props.duration} min</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
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
    // marginVertical: 5,
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
    fontFamily: 'open-sans-bold', // TODO
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
