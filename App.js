import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from '@ant-design/react-native';
import Nav from './src/views/Nav';

class App extends Component {
  render() {
    return (
      <Provider>
        <View style={{ flex: 1, backgroundColor: '#2B2C31' }}>
          <Nav></Nav>
        </View>
      </Provider>
    );
  }
}

export default App;
