import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

import { CategoryGridItemPropsInterface } from '../interfaces/category-interface';

import DefaultBoldText from './DefaultBoldText';

const CategoryGridItem = ({
  onSelect,
  color,
  title,
}: CategoryGridItemPropsInterface) => {
  let TouchableComponent;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  } else {
    TouchableComponent = TouchableOpacity;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={styles.gridContainer} onPress={onSelect}>
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <DefaultBoldText style={styles.title} numberOfLines={2}>
            {title}
          </DefaultBoldText>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    height: 150,
    elevation: 5,
  },
  gridContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
  },
  title: {
    padding: 15,
    textAlign: 'right',
    fontSize: 18,
  },
});

export default CategoryGridItem;
