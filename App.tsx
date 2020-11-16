import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigation from './navigation/DrawerNavigation';

const App: () => React.ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
