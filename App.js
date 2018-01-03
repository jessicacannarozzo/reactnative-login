import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.backgroundColor = spiceBackgroundColor}
          title="Let's Party"
          accessibilityLabel="Let's Party"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(250, 250, 250)",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//Firebase:


//Other Functions:

//assigns background a random color
//return: rgb string. g,b are all between 0 and 255.
//r is between 125,255 to avoid text being hidden via dark backgrounds
function spiceBackgroundColor() {
  return "rgb("+randomInt(125,255)+","+randomInt(0,255)+","+randomInt(0,255)+")";
}

//returns random value between min and max
function randomInt(min,max) {
  return Math.random() * (max - min) + min;
}
