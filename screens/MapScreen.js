import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
import MapView from 'react-native-maps';

export default class MapScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 50,
    marginTop: 250,
    marginBottom: 20,
    color: '#FFF8F8',
    fontSize: 50,
    lineHeight: 19,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
});
