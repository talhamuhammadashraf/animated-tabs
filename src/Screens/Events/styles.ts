import {StyleSheet} from 'react-native';
import {black} from '../../Theme/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbarContainerStyle: {flex: 1, justifyContent: 'center'},
  labelStyle: {fontWeight: '600', marginHorizontal: -6},
});
