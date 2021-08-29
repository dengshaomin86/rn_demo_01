import React from 'react';
import {Text} from 'react-native';
import iconfontMap from '../fonts/iconfontMap';

const Index = props => {
  const {style, name} = props;
  const unicode = iconfontMap[name];
  return <Text style={{fontFamily: 'iconfont', ...style}}>{unicode}</Text>;
};

export default Index;
