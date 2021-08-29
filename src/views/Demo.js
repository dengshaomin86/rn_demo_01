import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {ImageHeaderScrollView, TriggeringView} from 'react-native-image-header-scroll-view';

class Index extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      header: () => null,
    });
  }

  renderForeground = () => {
    return (
      <View style={{height: 150, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
        <TouchableOpacity>
          <Text style={{backgroundColor: 'transparent'}}>header</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderMain = () => {
    return (
      <View style={{backgroundColor: 'skyblue'}}>
        <TriggeringView onHide={() => console.log('text hidden')}>
          {new Array(50).fill('').map((item, i) => (
            <Text key={i}>Scroll Me!</Text>
          ))}
          <Text>*** end ***</Text>
        </TriggeringView>
      </View>
    );
  };

  render() {
    return (
      <ImageHeaderScrollView
        maxHeight={200}
        minHeight={50}
        headerImage={require('../assets/images/user-bg.jpg')}
        renderForeground={() => this.renderForeground()}>
        {this.renderMain()}
      </ImageHeaderScrollView>
    );
  }
}

export default Index;
