/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { StatusBar, StyleSheet, View } from 'react-native';

class App extends Component {
  state = {
    routerName: '',
    backgroundColor: '#2979ff',
    barStyle: 'light-content',
  };

  onMessage(event) {
    let { data } = event.nativeEvent;
    data = JSON.parse(data);
    const { routerName } = data;
    const isDark = ['SignIn', 'SignUp'].includes(routerName);
    const backgroundColor = isDark ? '#ffffff' : '#2979ff';
    const barStyle = isDark ? 'dark-content' : 'light-content';
    this.setState({ routerName, backgroundColor, barStyle });
  }

  render() {
    const { backgroundColor, barStyle } = this.state;
    // const uri = 'file:///android_asset/static.bundle/index.html';
    // const uri = 'file:///android_asset/dist/index.html';
    const uri = 'http://42.194.207.119/';
    return (
      <View style={styles.wrapper}>
        <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} translucent={false} />
        <WebView source={{ uri }} originWhitelist={['*']} onMessage={this.onMessage.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
