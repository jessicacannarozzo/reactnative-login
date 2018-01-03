import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: spiceBackgroundColor(),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//Firebase:


//Other Functions

//assigns background a random color
//return: rgb string. r,g,b are all between 0 and 255
function spiceBackgroundColor() {
  return "rgb("+randomInt(0,255)+","+randomInt(0,255)+","+randomInt(0,255)+")";
}

//returns random value between min and max
function randomInt(min,max) {
  return Math.random() * (max - min) + min;
}
