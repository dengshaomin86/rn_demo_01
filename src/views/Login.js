import React, {Component} from 'react';
import {View, Text, Button, Image, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {px2dp} from '../utils/stylesKits';
import {validatePhoneNumber} from '../utils/validator';
import request from '../utils/request';
import {ACCOUNT_LOGIN} from '../utils/pathMap';
import Toast from '../utils/toast';
import DButton from '../components/DButton';
import CodeField from '../components/CodeField';

class Login extends Component {
  static navigationOptions = {
    title: '123',
  };

  constructor() {
    super();
  }

  state = {
    phoneNumber: '13006190216',
    validate: true,
    showLogin: true,
    count: '',
  };

  changeText = phoneNumber => {
    this.setState({phoneNumber});
    Toast.showLoading();
  };

  // 获取验证码
  handleGetVCode = async () => {
    console.log('handleGetVCode');
    const {phoneNumber} = this.state;
    const validate = validatePhoneNumber(phoneNumber);
    this.setState({validate});
    if (!validate) return;
    // const res = await request.post(ACCOUNT_LOGIN, {
    //   phone: phoneNumber,
    // });
    // console.log(res);
    this.setState({showLogin: false});
    this.countDown();
  };

  // 定时器
  countDown = () => {
    let sec = 10;
    let timeId = setInterval(() => {
      sec--;
      this.setState({count: sec});
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
    const {phoneNumber, validate} = this.state;

    return (
      <View>
        <View>
          <Text style={{fontSize: px2dp(20), color: '#333'}}>手机号登录注册</Text>
        </View>
        <View style={{marginTop: px2dp(30)}}>
          <Input
            placeholder="请输入手机号"
            leftIcon={<Icon name="phone" size={px2dp(20)} color="#ccc" />}
            maxLength={11}
            keyboardType="phone-pad"
            value={phoneNumber}
            inputStyle={{color: '#333'}}
            errorMessage={validate ? '' : '手机号码格式不正确'}
            onChangeText={this.changeText}
            onSubmitEditing={this.handleGetVCode}
          />
        </View>
        <View>
          <DButton onPress={this.handleGetVCode} style={{width: '90%', height: px2dp(50), alignSelf: 'center', borderRadius: 50, overflow: 'hidden'}}>
            获取验证码
          </DButton>
        </View>
      </View>
    );
  };

  // 渲染验证码
  renderVCode = () => {
    const {phoneNumber, count} = this.state;

    return (
      <View>
        <View>
          <Text style={{fontSize: px2dp(20), color: '#333'}}>输入6位验证码</Text>
        </View>
        <Text>已发到：+86 {phoneNumber}</Text>
        <CodeField onSubmitEditing={this.submit} />
        <View style={{marginTop: px2dp(30)}}>
          <DButton
            onPress={this.handleGetVCode}
            disabled={!!count}
            style={{width: '90%', height: px2dp(50), alignSelf: 'center', borderRadius: 50, overflow: 'hidden'}}>
            重新获取{count ? `(${count})` : ''}
          </DButton>
        </View>
      </View>
    );
  };

  render() {
    const {navigation} = this.props;
    const {showLogin} = this.state;

    return (
      <View>
        <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
        <Image style={{width: '100%', height: px2dp(200)}} source={require('../assets/images/1.jpg')}></Image>
        <View style={{padding: px2dp(20)}}>{showLogin ? this.renderLogin() : this.renderVCode()}</View>
        {/* <Button title="go to home" onPress={() => navigation.navigate('Home')}></Button> */}
      </View>
    );
  }
}

export default Login;
