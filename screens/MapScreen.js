import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyB41fmo3vZLDtQZbyOv9Uq4fTnvLy0mPf8');

Geocoder.from('NY')
  .then(json => {
    var location = json.results[0].geometry.location;
    console.log('🥳🥳🥳🥳🥳🥳', location);
  })
  .catch(error => console.warn(error));

Geocoder.from(41.89, 12.49)
  .then(json => {
    var addressComponent = json.results[0].address_components[0];
    console.log(addressComponent);
  })
  .catch(error => console.warn(error));

export default class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
    };
  }

  getData() {
    Geocoder.setApiKey('AIzaSyB41fmo3vZLDtQZbyOv9Uq4fTnvLy0mPf8');

    Geocoder.from('Colosseum')
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log('🥳🥳🥳🥳🥳🥳', location);
      })
      .catch(error => console.warn(error));
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.container}> */}
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker coordinate={this.state} />
        </MapView>
        <TouchableOpacity
          onPress={() => {
            this.getData();
          }}
        >
          <Text>Get Address</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
