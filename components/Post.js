import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { CreatePost } from './CreatePost';
import { EditPost } from './EditPost';
export class Post extends Component {
  constructor() {
    super();

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
      <View style={styles.postContainer}>
        <View style={styles.container}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
            source={require('./../assets/images/swimgirl.jpg')}
          />

          <View style={styles.dateUserContainer}>
            <Text style={styles.username}>{this.props.postInfo.eventName}</Text>
            <Text style={styles.postText}> {this.props.postInfo.address} </Text>
            <Text style={styles.postText}>
              {new Date(this.props.postInfo.chosenDate.toDate()).toDateString()}
            </Text>
          </View>
        </View>
        <Text style={styles.postText}>{this.props.postInfo.note} </Text>
        <TouchableOpacity
          onPress={() => this.setState({ isModalVisible: true })}
          style={styles.buttonContainer}
        >
          <Image
            style={styles.button}
            source={require('./../assets/images/iconedit.png')}
          />
        </TouchableOpacity>

        <EditPost
          postInfo={this.props.postInfo}
          isModalVisible={this.state.isModalVisible}
          closeModal={() => this.closeModal()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    padding: 10,
    borderBottomColor: '#dadada',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateUserContainer: {
    marginLeft: 3,
  },
  postText: {
    padding: 5,
    fontSize: 15,
  },
  button: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 350,
  },
});
