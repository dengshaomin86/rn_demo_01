import React, {Component, useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    color: '#7d53ea',
  },
  focusCell: {
    borderColor: '#7d53ea',
  },
});

class Index extends Component {
  state = {
    value: '',
    CELL_COUNT: 6,
  };
  constructor() {
    super();
  }

  setValue = value => {
    this.setState({value});
  };

  render() {
    const {value, CELL_COUNT} = this.state;
    const {onSubmitEditing} = this.props;
    return (
      <CodeField
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={this.setValue}
        onSubmitEditing={onSubmitEditing}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        renderCell={({index, symbol, isFocused}) => (
          <Text key={index} style={[styles.cell, isFocused && styles.focusCell]}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    );
  }
}

export default Index;
