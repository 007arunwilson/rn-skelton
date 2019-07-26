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


const App = () => {
  return (
    <Fragment>
      <StatusBar translucent backgroundColor="#E9E9E9" barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View >
          <Text >Please wait ...</Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
