import React, { Component } from 'react';
import { View, Text, Button, Image, StatusBar, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { px2dp } from '../utils/stylesKits';
import { validatePhoneNumber } from '../utils/validator';
import request from '../utils/request';
import { ACCOUNT_LOGIN } from '../utils/pathMap';
import Toast from '../utils/toast';
import DButton from '../components/DButton';
import CodeField from '../components/CodeField';
import { screenWidth, screenHeight } from '../utils/stylesKits';

class Login extends Component {
  state = {
    phoneNumber: '13006190216',
    validate: true,
    showLogin: true,
    count: '',
  };

  changeText = phoneNumber => {
    this.setState({ phoneNumber });
    Toast.showLoading();
  };

  // 获取验证码
  handleGetVCode = async () => {
    console.log('handleGetVCode');
    const { phoneNumber } = this.state;
    const validate = validatePhoneNumber(phoneNumber);
    this.setState({ validate });
    if (!validate) return;
    // const res = await request.post(ACCOUNT_LOGIN, {
    //   phone: phoneNumber,
    // });
    // console.log(res);
    this.setState({ showLogin: false });
    this.countDown();
  };

  // 定时器
  countDown = () => {
    let sec = 10;
    let timeId = setInterval(() => {
      sec--;
      this.setState({ count: sec });
      if (sec === 0) {
        clearInterval(timeId);
      }
    }, 1000);
  };

  // 提交
  submit = async () => {
    console.log('submit');
    this.props.navigation.navigate('Home');
  };

  // 渲染登录
  renderLogin = () => {
    const { phoneNumber, validate } = this.state;

    return (
      <View style={styles.wrap}>
        <View style={styles.form}>
          <Text style={styles.title}>手机号登录注册</Text>
          <Input
            placeholder="请输入手机号"
            leftIcon={<Icon name="phone" size={px2dp(20)} color="#ccc" />}
            maxLength={11}
            keyboardType="phone-pad"
            value={phoneNumber}
            inputStyle={styles.input}
            errorMessage={validate ? '' : '手机号码格式不正确'}
            onChangeText={this.changeText}
            onSubmitEditing={this.handleGetVCode}
          />
        </View>
        <View>
          <DButton onPress={this.handleGetVCode} style={styles.button}>
            获取验证码
          </DButton>
        </View>
      </View>
    );
  };

  // 渲染验证码
  renderVCode = () => {
    const { phoneNumber, count } = this.state;

    return (
      <View style={styles.wrap}>
        <View style={styles.form}>
          <Text style={styles.title}>输入6位验证码</Text>
          <Text>已发到：+86 {phoneNumber}</Text>
          <CodeField onSubmitEditing={this.submit} />
        </View>
        <View>
          <DButton onPress={this.handleGetVCode} disabled={!!count} style={styles.button}>
            重新获取{count ? `(${count})` : ''}
          </DButton>
        </View>
      </View>
    );
  };

  render() {
    const { showLogin } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
        <ImageBackground source={require('../assets/images/login-bg.jpg')} style={styles.bgImg}>
          <ScrollView>
            <View>{showLogin ? this.renderLogin() : this.renderVCode()}</View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    resizeMode: 'cover',
  },
  wrap: {
    margin: px2dp(20),
    marginTop: px2dp(200),
  },
  form: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: px2dp(20),
    marginBottom: px2dp(30),
    borderRadius: px2dp(6),
  },
  title: {
    fontSize: px2dp(20),
    color: '#333',
  },
  input: {
    color: '#333',
    borderColor: '#fff',
  },
  button: {
    width: px2dp(screenWidth - 30),
    height: px2dp(50),
    alignSelf: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
});

export default Login;
