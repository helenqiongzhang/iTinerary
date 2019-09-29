import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latlong: '',
    };
  }

  componentDidMount() {
    this.getLocation = () => {
      navigator.geolocation.getCurrentPosition(response => {
        console.log(response.coords);
      });
    };
  }

  render() {
    return <ScrollView style={styles.container}></ScrollView>;
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
