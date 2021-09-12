import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { px2dp } from '../utils/stylesKits';
import { dark } from '../utils/color';
import DInput from '../components/DInput';
import DButton from '../components/DButton';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  changeUsername = username => {
    this.setState({ username });
  };

  changePassword = password => {
    this.setState({ password });
  };

  submit = async () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    const { username, password } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.wrap}>
            <View style={styles.form}>
              <View style={styles.titleWrap}>
                <Text style={styles.title}>登录</Text>
              </View>
              <DInput style={styles.input} value={username} onChangeText={this.changeUsername} icon="user" placeholder="用户名"></DInput>
              <DInput
                style={styles.input}
                value={password}
                onChangeText={this.changePassword}
                icon="password"
                placeholder="密码"
                secureTextEntry={true}></DInput>
              <DButton onPress={this.submit} style={styles.button}>
                LOGIN
              </DButton>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.background,
  },
  wrap: {
    margin: px2dp(20),
    marginTop: px2dp(120),
  },
  form: {
    padding: px2dp(20),
    borderRadius: px2dp(6),
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: px2dp(60),
  },
  title: {
    color: dark.color,
    fontSize: px2dp(40),
  },
  input: {
    marginBottom: px2dp(30),
    borderColor: dark.panel,
    borderWidth: px2dp(1),
    borderBottomColor: dark.panel,
    borderRadius: px2dp(50),
    paddingLeft: px2dp(15),
    paddingRight: px2dp(15),
  },
  button: {
    height: px2dp(50),
    overflow: 'hidden',
    borderRadius: px2dp(50),
  },
});

export default Login;
