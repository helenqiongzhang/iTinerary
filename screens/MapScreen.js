import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { FirebaseWrapper } from '../firebase/firebase';

export default class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  static navigationOptions = {
    header: null,
  };

  async componentDidMount() {
    try {
      await FirebaseWrapper.GetInstance().SetupCollectionListener(
        'posts',
        posts => this.setState({ posts })
      );
    } catch (error) {
      console.log('Something wrong with fetching posts', error);
    }
  }

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         error: null,
  //       });
  //     },
  //     error => this.setState({ error: error.message }),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
  //   );
  // }

  render() {
    const { posts = [] } = this.state;
    const firstItem = posts[0] || {};

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: (firstItem.location && firstItem.location.lat) || 0,
            longitude: (firstItem.location && firstItem.location.lng) || 0,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <>
            {posts.map(post => (
              <Marker
                key={Math.random().toString()}
                coordinate={{
                  latitude: post.location && post.location.lat,
                  longitude: post.location && post.location.lng,
                }}
              />
            ))}
          </>

          <Polyline
            coordinates={posts.map(post => ({
              latitude: post.location && post.location.lat,
              longitude: post.location && post.location.lng,
            }))}
            strokeColor="#ff0000"
            strokeWidth={3}
          />

          <Marker coordinate={this.state} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
