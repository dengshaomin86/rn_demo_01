import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Index extends Component {
  static defaultProps = {
    style: {},
    textStyle: {},
  };
  render() {
    const {style, textStyle, children, onPress, disabled} = this.props;
    return (
      <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.7} style={{width: '100%', height: '100%', ...style}}>
        <LinearGradient start={{x: 0, y: 0}} start={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Text style={{...styles.buttonText, ...textStyle}}>{children}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
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
