import React, { useState } from 'react';

import { AppEntry } from './components/AppEntry';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AppNavigator from './navigation/AppNavigator';

const MainNavigator = createStackNavigator({
  Home: { screen: AppEntry },
  AppNavigator: { screen: AppNavigator },
});

const App = createAppContainer(MainNavigator);

export default App;
