import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export function Post(props) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={require('./../assets/images/robot-dev.png')}
        />

        <View style={styles.dateUserContainer}>
          <Text style={styles.username}>EventName</Text>
          <Text> 26/09/19</Text>
        </View>
      </View>

      <Text style={styles.postText}>{props.postInfo.text} </Text>
    </View>
  );
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
});
