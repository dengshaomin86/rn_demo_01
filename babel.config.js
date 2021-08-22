module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // 兼容 mobx es7 语法
  plugins: [['@babel/plugin-proposal-decorators', {legacy: true}]],
};
