import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import TabNavigation from './navigation/TabNavigation';

const App: () => React.ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TabNavigation />
    </>
  );
};

export default App;
