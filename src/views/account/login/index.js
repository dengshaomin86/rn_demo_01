import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Login extends Component {
  static navigationOptions = {
    title: '123',
  };

  render() {
    const {navigation} = this.props;

    return (
      <View>
        <Text>Login</Text>
        <Button title="go to home" onPress={() => navigation.navigate('Home')}></Button>
      </View>
    );
  }
}

export default Login;
