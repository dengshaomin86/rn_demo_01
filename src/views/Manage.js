import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, ImageBackground, ScrollView } from 'react-native';
import { px2dp } from '../utils/stylesKits';

class Index extends Component {
  state = {
    list: [
      {
        name: '记事本',
      },
      {
        name: '账号管理',
      },
      {
        name: '记账',
      },
    ],
  };
  renderItem(item) {
    const { name } = item;
    return (
      <TouchableOpacity key={name} style={styles.itemWrap} activeOpacity={0.5}>
        <Text style={styles.itemTitle}>{name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { list } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.listWrap}>{list.map(item => this.renderItem(item))}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A3E4D',
  },
  listWrap: {
    backgroundColor: 'rgba(81,60,75,0.8)',
    marginTop: px2dp(15),
  },
  itemWrap: {
    padding: px2dp(20),
    borderBottomColor: '#5A3E4D',
    borderBottomWidth: px2dp(1),
  },
  itemTitle: {
    color: '#fff',
  },
});

export default Index;
