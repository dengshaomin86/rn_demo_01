import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { dark } from '../utils/color';
import { px2dp } from '../utils/stylesKits';
import Icon from './Iconfont';

class Index extends Component {
  state = {};

  static defaultProps = {
    keyboardType: 'default',
    secureTextEntry: false,
  };

  onLayout = event => {
    const { width, height, x, y } = event.nativeEvent.layout;
  };

  render() {
    const { style, disabled, placeholder, icon, value, onChangeText, keyboardType, secureTextEntry } = this.props;

    return (
      <View style={{ ...styles.container, ...style }} onLayout={this.onLayout}>
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
    borderBottomColor: dark.color,
    borderBottomWidth: px2dp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: dark.color,
    fontSize: px2dp(24),
    marginRight: px2dp(8),
  },
  input: {
    flex: 1,
    color: dark.color,
    fontSize: px2dp(18),
  },
});

export default Index;
