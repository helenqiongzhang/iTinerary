import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
export class AppEntry extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        source={{
          uri:
            'https://r1.ilikewallpaper.net/pic/201807/adventure_39095_1125x2436_640.jpg',
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>iTinerary</Text>
            <Button
              color="#00D3FF"
              title="ADVENTURE awaits"
              style={styles.loginScreenButton}
              onPress={() => navigate('AppNavigator')}
            />
          </View>
        </View>
      </ImageBackground>
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
