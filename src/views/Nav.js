import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Demo from './Demo';
import Login from './Login';
import Home from './Home';
import UserInfo from './UserInfo';
import Manage from './Manage';

// 创建页面栈
const Stack = createNativeStackNavigator();

function Nav() {
  const options = {
    headerStyle: {
      backgroundColor: '#4A3544',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={options}>
        <Stack.Group>
          <Stack.Screen name="Demo" component={Demo} />
        </Stack.Group>
        <Stack.Group screenOptions={{ header: () => null, mode: 'screen' }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="UserInfo" component={UserInfo} />
          <Stack.Screen name="Manage" component={Manage} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
