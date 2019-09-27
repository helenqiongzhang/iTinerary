import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppEntry } from './components/AppEntry';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AppNavigator from './navigation/AppNavigator';

const MainNavigator = createStackNavigator({
  Home: { screen: AppEntry },
  AppNavigator: { screen: AppNavigator },
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
