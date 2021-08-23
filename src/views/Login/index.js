import React, {Component} from 'react';
import {View, Text, Button, Image, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {px2dp} from '../../utils/stylesKits';
import {validatePhoneNumber} from '../../utils/validator';
import request from '../../utils/request';
import {ACCOUNT_LOGIN} from '../../utils/pathMap';
import Toast from '../../utils/toast';

class Login extends Component {
  static navigationOptions = {
    title: '123',
  };

  constructor() {
    super();
  }

  state = {
    phoneNumber: '',
    validate: true,
  };

  changeText = phoneNumber => {
    this.setState({phoneNumber});
    Toast.showLoading();
  };

  submit = async () => {
    const {phoneNumber} = this.state;
    const validate = validatePhoneNumber(phoneNumber);
    this.setState({validate});
    if (!validate) return;
    const res = await request.post(ACCOUNT_LOGIN, {
      phone: phoneNumber,
    });
    console.log(res);
  };

  render() {
    const {navigation} = this.props;
    const {phoneNumber, validate} = this.state;

    return (
      <View>
        <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
        <Image style={{width: '100%', height: px2dp(200)}} source={require('../../assets/images/1.jpg')}></Image>
        <View style={{padding: px2dp(20)}}>
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
              onSubmitEditing={this.submit}
            />
          </View>
        </View>
        <Text>Login</Text>
        <Button title="go to home" onPress={() => navigation.navigate('Home')}></Button>
      </View>
    );
  }
}

export default Login;
