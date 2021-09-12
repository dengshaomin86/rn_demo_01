import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { px2dp } from '../utils/stylesKits';
import { dark } from '../utils/color';

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
        <ScrollView>
          <View style={styles.listWrap}>{list.map(item => this.renderItem(item))}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.background,
  },
  listWrap: {
    backgroundColor: dark.panel,
    marginTop: px2dp(15),
  },
  itemWrap: {
    padding: px2dp(20),
    borderBottomColor: dark.background,
    borderBottomWidth: px2dp(1),
  },
  itemTitle: {
    color: dark.color,
    fontSize: px2dp(18),
  },
});

export default Index;
