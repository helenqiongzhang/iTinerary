import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { firebaseConfig } from '../firebase/config';
import { FirebaseWrapper } from '../firebase/firebase';

export class AppEntry extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    FirebaseWrapper.GetInstance().initialize(firebaseConfig);

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
            {/* <Text style={styles.title}>iTinerary</Text> */}
            <Image
              style={styles.title}
              source={require('./../assets/images/logo4.png')}
            />

            <TouchableOpacity onPress={() => navigate('AppNavigator')}>
              <Image
                style={styles.button}
                source={require('./../assets/images/logo5.png')}
              />
            </TouchableOpacity>
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
    marginBottom: 0,
    color: '#FFF8F8',
    fontSize: 50,
    lineHeight: 19,
    textAlign: 'center',
  },
  button: {
    paddingTop: 50,
    marginTop: 0,
    marginBottom: 50,
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
