import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = (props) => {
  const item = props.route.params;
  console.log(item);
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Button
        title="go to home screen"
        onPress={() => {
          props.navigation.popToTop();
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
