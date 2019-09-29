import React, { Component } from 'react';
import {
  DatePickerIOS,
  Modal,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import { FirebaseWrapper } from '../firebase/firebase';

//just copied from createPost, need to change content to updatePost
export class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      address: '',
      chosenDate: new Date(),
    };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  async createPost() {
    try {
      await FirebaseWrapper.GetInstance().CreateNewDocument('posts', {
        eventName: this.state.eventName,
        address: this.state.address,
        chosenDate: this.state.chosenDate,
      });
      this.props.closeModal();
    } catch (error) {
      console.log('Something went wrong creating post', error);
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isModalVisible}
      >
        <View style={{ marginTop: 25 }}>
          <TouchableHighlight
            onPress={() => {
              this.props.closeModal();
            }}
          >
            <Image
              source={{
                uri:
                  'https://cdn4.iconfinder.com/data/icons/media-controls-4/100/close-512.png',
              }}
              style={styles.close}
            />
          </TouchableHighlight>

          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={eventName => this.setState({ eventName })}
            placeholder="Event name here..."
            value={this.state.eventName}
            style={styles.input}
          />

          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={address => this.setState({ address })}
            placeholder="Event address here..."
            value={this.state.text}
            style={styles.input}
          />
        </View>
        <View style={styles.container}>
          <DatePickerIOS
            date={this.state.chosenDate}
            onDateChange={this.setDate}
          />
        </View>
        <Button title="Update Event" onPress={() => this.createPost()} />
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 120,
    marginLeft: 10,
    fontSize: 30,
  },
  close: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
});
