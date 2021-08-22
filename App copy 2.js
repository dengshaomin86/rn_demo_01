/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {Text, View, Dimensions, TouchableOpacity, Image, ImageBackground} from 'react-native';
 import axios from 'axios';
 import RootStore from './src/mobx';
 import {Provider} from 'mobx-react';
 import TestView from './src/views/TestView';
 
 const screenWidth = Math.round(Dimensions.get('window').width);
 const screenHeight = Math.round(Dimensions.get('window').height);
 
 const App = () => {
   const handlePress = async () => {
     const res = await axios.get('http://120.77.221.16:3000/chat/list');
     console.log(res);
     alert('press');
   };
 
   return (
     <View style={{backgroundColor: 'aqua', flex: 1}}>
       <Provider RootStore={RootStore}>
         <Text>hello</Text>
         <About name="appName_01"></About>
         <ListView name="list title" />
         <TestView />
         <TouchableOpacity activeOpacity={0.5} onPress={handlePress} style={{backgroundColor: 'red', width: 100, height: 100}}>
           <Text>touch</Text>
         </TouchableOpacity>
         {/* <Image source={require('./src/assets/images/1.jpg')} style={{height: 200}} /> */}
         <Image source={require('./src/assets/images/2.gif')} style={{width: 200, height: 200}} />
         <Image source={{uri: 'https://himg.bdimg.com/sys/portraitn/item/698f444444534d43414f8b2c'}} style={{width: 100, height: 100}} />
         <ImageBackground source={require('./src/assets/images/1.jpg')} style={{width: screenWidth, height: 200}} />
       </Provider>
     </View>
   );
 };
 
 // 函数式组件
 const About = props => {
   return (
     <View>
       <Text>This is {props.name} about</Text>
     </View>
   );
 };
 
 // 类组件
 class ListView extends Component {
   state = {
     list: ['cat', 'dog', 'hourse'],
   };
   componentDidMount() {
     console.log('挂载完成');
   }
   componentDidUpdate() {
     console.log('数据更新');
   }
   componentWillUnmount() {
     console.log('卸载前');
   }
   handlePress(item) {
     console.log(item);
   }
   render() {
     return (
       <View>
         <Text>{this.props.name}</Text>
         {this.state.list.map((item, idx) => (
           <View key={idx}>
             <Text onPress={this.handlePress}>***{item}***</Text>
           </View>
         ))}
       </View>
     );
   }
 }
 
 export default App;
 