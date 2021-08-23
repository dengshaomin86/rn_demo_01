import React from 'react';
import {ActivityIndicator} from 'react-native';
// import {Toast, Theme} from 'teaset';

let customKey = null;

const _toast = {
  showLoading() {
    if (customKey) return;
    console.log('showLoading');
  },
  hideLoading() {
    console.log('hideLoading');
  },
  // showLoading(text) {
  //   if (customKey) return;
  //   customKey = Toast.show({
  //     text: 'msg',
  //     // icon: <ActivityIndicator size="large" color={Theme.toastIconTintColor}></ActivityIndicator>,
  //     position: 'top',
  //     duration: 3000,
  //   });
  // },
  // hideLoading() {
  //   if (!customKey) return;
  //   // Toast.hide(customKey);
  //   customKey = null;
  // },
};

export default _toast;
