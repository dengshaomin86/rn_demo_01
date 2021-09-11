import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { px2dp } from '../utils/stylesKits';
import Icon from './Iconfont';

class Index extends Component {
  static defaultProps = {
    keyboardType: 'default',
    secureTextEntry: false,
  };

  render() {
    const { style, disabled, placeholder, icon, value, onChangeText, keyboardType, secureTextEntry } = this.props;

    return (
      <View style={{ ...styles.container, ...style }}>
        {icon ? <Icon name={icon} style={styles.icon} /> : <></>}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: px2dp(24),
    marginRight: px2dp(8),
  },
  input: {
    color: '#fff',
    fontSize: px2dp(18),
  },
});

export default Index;
