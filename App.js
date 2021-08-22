/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, Dimensions, TouchableOpacity, Image, ImageBackground} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'aqua',
        flex: 1,
        transform: [{translateX: 20}, {scale: 2}],
      }}>
      <Text>hello</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={handlePress} style={{backgroundColor: 'red', width: 100, height: 100}}>
        <Text>touch</Text>
      </TouchableOpacity>
      {/* <Image source={require('./src/assets/images/1.jpg')} style={{height: 200}} /> */}
      {/* <Image source={require('./src/assets/images/3.gif')} style={{width: 200, height: 100}} /> */}
      {/* <Image source={{uri: 'https://himg.bdimg.com/sys/portraitn/item/698f444444534d43414f8b2c'}} style={{width: 200, height: 100}} /> */}
      <ImageBackground source={require('./src/assets/images/1.jpg')} style={{width: screenWidth, height: screenHeight}} />
    </View>
  );
};

const handlePress = () => {
  alert('press');
};

export default App;
