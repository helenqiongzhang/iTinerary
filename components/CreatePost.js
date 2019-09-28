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

export class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
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
        text: this.state.text,
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
            onChangeText={text => this.setState({ text })}
            placeholder="start planning here..."
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
        <Button title="Create Event" onPress={() => this.createPost()} />
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
