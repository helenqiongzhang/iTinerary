import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { CreatePost } from './CreatePost';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      text: '',
    };
  }

  closeModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 90, borderRadius: 25 }}
          source={{
            uri:
              'https://cdn.dribbble.com/users/187833/screenshots/5290894/canjet-02.gif',
          }}
        />
        {/* <Text style={styles.text}>{this.props.text}</Text> */}

        <TouchableOpacity
          onPress={() => this.setState({ isModalVisible: true })}
          style={styles.buttonContainer}
        >
          <Image
            style={styles.button}
            source={{ uri: 'https://img.icons8.com/clouds/150/000000/add.png' }}
          />
        </TouchableOpacity>

        <CreatePost
          isModalVisible={this.state.isModalVisible}
          closeModal={() => this.closeModal()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#dadada',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  button: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  buttonContainer: {
    paddingRight: 5,
  },
});
