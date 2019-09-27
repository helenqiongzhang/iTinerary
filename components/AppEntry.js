import React, { Component } from 'react';
import {
  Text,
  Modal,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
export class AppEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  static navigationOptions = {
    header: null,
  };
  createPost() {
    console.log('ayoooo', this.state.text);
    // make call to Firebase
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        source={{
          uri:
            // 'https://r1.ilikewallpaper.net/pic/201810/Abbot-Kinney_74942_1125x2436_640.jpg',
            // 'https://r1.ilikewallpaper.net/pic/201806/wild-blue-sea_38814_1125x2436_640.jpg',

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
    // backgroundColor: '#B3CBB9',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  adventure: {
    color: '#FFF8F8',
    textAlign: 'center',
    fontSize: 15,
  },
  awaits: {
    color: '#FFF8F8',
    textAlign: 'center',
    fontSize: 15,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 200,
  },

  loginScreenButton: {
    width: 150,
    height: 55,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#00D3FF',
    borderRadius: 7,
    // borderWidth: 1,
    // borderColor: '#fff',
    opacity: 1,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
