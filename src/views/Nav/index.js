import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login';
import Home from '../Home';

// 创建页面栈
const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal', headerStyle: {backgroundColor: 'papayawhip'}}}>
          <Stack.Screen name="Login" component={Login} options={{title: 'login-a', header: () => null}} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
