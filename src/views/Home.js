import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { px2dp } from '../utils/stylesKits';
import { dark } from '../utils/color';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../components/Iconfont';

class Index extends Component {
  state = {
    list: [
      {
        icon: 'signUp',
        title: '音乐',
        colors: ['#FFA956', '#FF5D75'],
      },
      {
        icon: 'signUp',
        title: '视频',
        colors: ['#9B5CFD', '#398FFE'],
      },
      {
        icon: 'signUp',
        title: '小说',
        colors: ['#02DFB6', '#46E543'],
      },
      {
        icon: 'signUp',
        title: '热点',
        colors: ['#FFDD00', '#FFA300'],
      },
      {
        icon: 'signUp',
        title: '管理',
        navigate: 'Manage',
        colors: ['#4ecdc4', '#556270'],
      },
    ],
  };

  navTo = navigate => {
    if (!navigate) return;
    this.props.navigation.navigate(navigate);
  };

  renderItem(item) {
    const { icon, title, colors, navigate } = item;
    return (
      <TouchableOpacity key={title} style={styles.itemWrap} activeOpacity={0.7} onPress={this.navTo.bind(this, navigate)}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={colors} style={styles.itemLinear}>
          <View style={styles.itemIconWrap}>
            <Icon name={icon} style={styles.itemIcon} />
          </View>
          <Text style={styles.itemTitle}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  render() {
    const { list } = this.state;
    const image = require('../assets/images/home.jpg');
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.bg}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[dark.transparent, dark.background]}
            style={styles.linearGradient}></LinearGradient>
        </ImageBackground>
        <ScrollView>
          <View style={styles.main}>
            <Text style={styles.username}>Assistant</Text>
            <View style={styles.dateWrap}>
              <Text style={{ ...styles.date, marginLeft: px2dp(4) }}>2021-02-12</Text>
              <Text style={styles.dateJoin}></Text>
              <Text style={styles.date}>Sat</Text>
            </View>
            <View style={styles.listWrap}>{list.map(item => this.renderItem(item))}</View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.background,
    position: 'relative',
  },
  bg: {
    width: '100%',
    height: px2dp(500),
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  linearGradient: {
    width: '100%',
    height: px2dp(300),
  },
  main: {
    marginTop: px2dp(300),
    padding: px2dp(20),
  },
  username: {
    color: dark.color,
    fontSize: px2dp(40),
    fontWeight: 'bold',
  },
  dateWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: px2dp(10),
  },
  date: {
    color: dark.subColor,
    fontSize: px2dp(14),
  },
  dateJoin: {
    width: px2dp(6),
    height: px2dp(6),
    backgroundColor: dark.subColor,
    borderRadius: px2dp(6),
    marginLeft: px2dp(10),
    marginRight: px2dp(10),
  },
  listWrap: {
    marginTop: px2dp(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  itemWrap: {
    width: '47%',
    marginBottom: px2dp(20),
  },
  itemLinear: {
    flex: 1,
    width: '100%',
    padding: px2dp(15),
    borderRadius: px2dp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemIconWrap: {
    width: px2dp(50),
    height: px2dp(50),
    borderRadius: px2dp(50),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: px2dp(10),
  },
  itemIcon: {
    fontSize: px2dp(25),
    color: 'rgba(255, 255, 255, 0.7)',
  },
  itemTitle: {
    fontSize: px2dp(18),
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default Index;
