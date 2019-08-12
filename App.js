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


import firebase from 'react-native-firebase';


const App = () => {

  console.log("FCM")
  console.log("\n\n\n\n\n\n\n ----- Louis ----------- \n\n\n\n\n\n\n\n")
  console.debug("\n\n\n\n\n\n\n ----- Louis ----------- \n\n\n\n\n\n\n\n");

  firebase.messaging().getToken()
    .then(fcmToken => {
      if (fcmToken) {

        console.log("fcmToken success:", fcmToken)
        // user has a device token
      } else {

        console.log("fcmToken error: no error");
        // user doesn't have a device token yet
      }
    }).catch(error => {

      console.log("fcmToken error:", error);

    });

  return (
    <Fragment>
      <StatusBar hidden translucent backgroundColor="#E9E9E9" barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View >
          <Text >Initiating ... FCM</Text>
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
