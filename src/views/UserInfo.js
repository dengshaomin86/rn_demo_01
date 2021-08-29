import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {male, female} from '../fonts/svgIcon';
import {px2dp} from '../utils/stylesKits';
import Iconfont from '../components/Iconfont';

class Index extends Component {
  state = {
    nickname: '',
    gender: 'male',
    birthday: '',
    city: '',
    avatar: '',
    lng: '',
    lat: '',
    address: '',
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: '用户资料',
    });
  }

  changeGender = gender => {
    this.setState({gender});
  };

  render() {
    const {gender, nickname} = this.state;
    return (
      <View style={{padding: px2dp(20)}}>
        <View style={styles.avatarWrap}>
          <TouchableOpacity
            onPress={this.changeGender.bind(this, 'male')}
            style={{...styles.iconWrap, marginRight: px2dp(30), borderColor: gender === 'male' ? 'red' : '#e9e9e9'}}>
            <SvgUri svgXmlData={male} width="40" height="40" />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeGender.bind(this, 'female')} style={{...styles.iconWrap, borderColor: gender === 'female' ? 'red' : '#e9e9e9'}}>
            <SvgUri svgXmlData={female} width="40" height="40" />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput style={styles.input} value={nickname} placeholder="请输入昵称" onChangeText={nickname => this.setState({nickname})} />
          <Text style={{fontFamily: 'iconfont'}}>{'\ue601'}</Text>
          <Iconfont name="female" style={{color: 'red'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: px2dp(20),
  },
  iconWrap: {
    padding: px2dp(10),
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: px2dp(100),
  },
  avatarIcon: {
    width: px2dp(40),
    height: px2dp(40),
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: px2dp(18),
  },
});

export default Index;
