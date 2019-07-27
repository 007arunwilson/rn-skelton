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
          <Text >Initiating ...</Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#eaeaea",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // position: 'absolute',
    // backgroundColor: gradientBackground,
    // height: 1,
    // bottom: (gradientHeight - i),
    // right: 0,
    // left: 0,
    // zIndex: 2,
    // opacity: (1 / gradientHeight) * (i + 1)
  },
});

export default App;
