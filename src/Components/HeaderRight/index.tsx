import {Image, View} from 'react-native';
import {heart, menu, search} from '../../Assets';
import styles from './styles';

export default function HeaderRight() {
  return (
    <View style={styles.container}>
      <Image source={heart} style={styles.image} />
      <Image source={search} style={styles.image} />
      <Image source={menu} style={styles.image} />
    </View>
  );
}
