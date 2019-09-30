import React, { Component } from 'react';
import {
  DatePickerIOS,
  Modal,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
import { FirebaseWrapper } from '../firebase/firebase';
import { GooglePlaceApiClient } from '../geo/google-place';
import Autocomplete from 'react-native-autocomplete-input';

export class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      address: '',
      note: '',
      location: {},
      chosenDate: new Date(),
      placeSuggestions: [],
    };
    this.setDate = this.setDate.bind(this);
    this.placeClient = new GooglePlaceApiClient();
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  async createPost() {
    try {
      await FirebaseWrapper.GetInstance().CreateNewDocument('posts', {
        eventName: this.state.eventName,
        address: this.state.address,
        note: this.state.note,
        chosenDate: this.state.chosenDate,
        location: this.state.location || {},
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
            onChangeText={note => this.setState({ note })}
            placeholder="Any notes on the event."
            value={this.state.note}
            style={styles.input}
          />
        </View>
        <View style={styles.autocompletesContainer}>
          <Autocomplete
            data={this.state.placeSuggestions}
            onChangeText={async text => {
              const placeSuggestions = await this.placeClient.searchPlace(text);
              this.setState({
                placeSuggestions,
              });
            }}
            defaultValue={this.state.address}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={async () => {
                    const result = await this.placeClient.getPlaceById(
                      item.id,
                      item
                    );
                    this.setState({
                      address: result.name,
                      location: result.location || {},
                      placeSuggestions: [],
                    });
                  }}
                >
                  <Text style={{ textAlign: 'center' }}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
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
  autocompletesContainer: {
    right: 0,
    top: 300,
    position: 'absolute',
    paddingTop: 0,
    zIndex: 10,
    width: '100%',
    paddingHorizontal: 8,
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
