import {Image, StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import {faker} from '@faker-js/faker';

export default function Participants() {
  return (
    <View style={styles.participants}>
      {avatars.slice(0, 3).map(({uri}, idx) => (
        <Image key={idx} source={{uri}} style={styles.avatarImage} />
      ))}
      <View style={StyleSheet.flatten([styles.avatarImage, styles.length])}>
        <Text style={styles.lengthText}>+{avatars.length}</Text>
      </View>
    </View>
  );
}

const avatars: {
  uri: string;
  name: string;
}[] = new Array(15).fill(getAvatarObject());
function getAvatarObject() {
  return {
    uri: faker.image.urlPicsumPhotos({width: 36, height: 36}),
    name: faker.word.words({count: 2}),
  };
}
