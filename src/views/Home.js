import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { px2dp } from '../utils/stylesKits';

class Index extends Component {
  renderForeground = () => {
    return (
      <View style={styles.titleWrap}>
        <Text style={styles.title}>《兰亭序》</Text>
      </View>
    );
  };

  renderMain = () => {
    return (
      <View style={styles.articalWrap}>
        <TriggeringView>
          <Text style={styles.artical}>
            &emsp;&emsp;永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。
          </Text>
          <Text style={styles.artical}>&emsp;&emsp;是日也，天朗气清，惠风和畅。仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也。</Text>
          <Text style={styles.artical}>
            &emsp;&emsp;夫人之相与，俯仰一世。或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。虽趣舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，不知老之将至；及其所之既倦，情随事迁，感慨系之矣。向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀，况修短随化，终期于尽！古人云：“死生亦大矣。”岂不痛哉！
          </Text>
          <Text style={styles.artical}>
            &emsp;&emsp;每览昔人兴感之由，若合一契，未尝不临文嗟悼，不能喻之于怀。固知一死生为虚诞，齐彭殇为妄作。后之视今，亦犹今之视昔，悲夫！故列叙时人，录其所述，虽世殊事异，所以兴怀，其致一也。后之览者，亦将有感于斯文。
          </Text>
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
        <StatusBar backgroundColor="transparent" translucent={true}></StatusBar>
        {this.renderMain()}
      </ImageHeaderScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: px2dp(26),
    fontWeight: 'bold',
  },
  articalWrap: {
    backgroundColor: 'skyblue',
    padding: px2dp(15),
    paddingBottom: px2dp(100),
  },
  artical: {
    fontSize: px2dp(22),
    marginBottom: px2dp(10),
  },
});

export default Index;
