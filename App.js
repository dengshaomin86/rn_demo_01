import React, {Component} from 'react';
import {View} from 'react-native';
import Nav from './src/views/Nav';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ff0'}}>
        <Nav></Nav>
      </View>
    );
  }
}

export default App;
