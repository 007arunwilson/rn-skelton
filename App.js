/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native';

// import firebase from 'react-native-firebase';


const App = () => {

  return (
    <Fragment>
      <StatusBar hidden translucent backgroundColor="#E9E9E9" barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View >
          <Text >Initiating ...</Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
