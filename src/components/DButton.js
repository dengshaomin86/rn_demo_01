import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { px2dp } from '../utils/stylesKits';

class Index extends Component {
  static defaultProps = {
    style: {},
    textStyle: {},
  };
  render() {
    const { style, textStyle, children, onPress, disabled } = this.props;
    return (
      <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.7} style={{ width: '100%', height: '100%', ...style }}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FF5B9D', '#FF8283', '#FEAC69']} style={styles.linearGradient}>
          <Text style={{ ...styles.buttonText, ...textStyle }}>{children}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: px2dp(5),
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Index;
