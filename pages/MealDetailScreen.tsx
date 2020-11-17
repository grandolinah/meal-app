import React from 'react';
import { View, StyleSheet, ScrollView, Image, ViewStyle } from 'react-native';

import DefaultText from '../components/DefaultText';
import DefaultBoldText from '../components/DefaultBoldText';

import { COLORS } from '../config/colors';

import { centerAlignedContent } from '../styles/align-center';

const MealDetailScreen = ({ route }) => {
  const item = route.params.item;

  const ListItem = ({ style, children}) => {
    return (
      <View style={{ ...style }}>
        <DefaultText>{children}</DefaultText>
      </View>
    )
  };

  return (
    <ScrollView>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{item.duration} min</DefaultText>
        <DefaultText>{item.complexity}</DefaultText>
        <DefaultText>{item.affordability}</DefaultText>
      </View>
      <View style={styles.lists}>
        <DefaultBoldText style={styles.title}>Ingredients</DefaultBoldText>
        {item.ingredients.map(ingredient => <ListItem style={styles.listItem} key={ingredient}>{ingredient}</ListItem>)}
        <DefaultBoldText style={styles.title}>Steps</DefaultBoldText>
        {item.steps.map(step => <ListItem style={styles.listItem} key={step}>{step}</ListItem>)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...centerAlignedContent,
  } as ViewStyle,
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  lists: {
    alignSelf: 'center',
    padding: 20,
  },
  title: {
    alignSelf: 'center',
    marginVertical: 8,
    fontSize: 20,
  },
  listItem: {
    borderColor: COLORS.ash,
    borderRadius: 4,
    borderWidth: 2,
    margin: 4,
    padding: 10,
  }
});

export default MealDetailScreen;
