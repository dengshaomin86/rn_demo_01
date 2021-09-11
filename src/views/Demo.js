import React, { Component } from 'react';
import { Button, Provider, Toast } from '@ant-design/react-native';

class Index extends Component {
  render() {
    return <Button onPress={() => Toast.info('This is a toast tips')}>Start</Button>;
  }
}

export default Index;
