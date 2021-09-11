import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Demo from './Demo';
import Login from './Login';
import Home from './Home';
import UserInfo from './UserInfo';

// 创建页面栈
const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Demo">
        <Stack.Group>
          <Stack.Screen name="Demo" component={Demo} />
        </Stack.Group>
        <Stack.Group screenOptions={{header: () => null}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="UserInfo" component={UserInfo} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
