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
} from 'react-native';

export class AppEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  createPost() {
    console.log('ayoooo', this.state.text);
    // make call to Firebase
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={
            __DEV__
              ? require('../assets/images/robot-dev.png')
              : require('../assets/images/robot-prod.png')
          }
          style={styles.welcomeImage}
        />
        <View>
          <Text style={styles.title}>iTinerary</Text>
          <Button style={styles.button} title="Adventures begin here" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 50,
    marginTop: 150,
    marginBottom: 20,
    color: '#542E71',
    fontSize: 50,
    lineHeight: 19,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#B3CBB9',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },

  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 200,
  },
  button: {
    backgroundColor: '#80A4ED',
  },
});
