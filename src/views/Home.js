import React, {Component} from 'react';
import {Text, View, Dimensions, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {inject, observer} from 'mobx-react';

@inject('RootStore')
@observer
class Home extends Component {
  changeRootName = () => {
    this.props.RootStore.changeName(`hello ${Date.now()}`);
  };
  render() {
    const {RootStore} = this.props;
    const {name} = RootStore;

    return (
      <View>
        <Text>home</Text>
        <Text onPress={this.changeRootName} style={{width: 100, height: 100, backgroundColor: 'yellow'}}>
          {name}
        </Text>
      </View>
    );
  }
}

export default Home;
