import { Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

/**
 * px 转 dp
 * @param {number} elePx 元素的宽/高(px)
 * @returns
 */
export const px2dp = elePx => (screenWidth * elePx) / 375;
