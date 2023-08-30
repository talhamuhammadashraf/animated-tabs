import {Text, View} from 'react-native';
import styles from './styles';
import {FC} from 'react';
import {Tag} from './types';

const TagList: FC<{tags: Tag[]}> = ({tags}) => (
  <View style={styles.tagList}>
    {tags.map(({title, key}) => (
      <View {...{key}} style={styles.tag}>
        <Text style={styles.tagText}>{title}</Text>
      </View>
    ))}
  </View>
);

export default TagList;
