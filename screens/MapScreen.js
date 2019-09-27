import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
import { MapView } from 'react-native-maps';

export default class MapScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>iTinerary</Text>
        </View>
      </View>
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
