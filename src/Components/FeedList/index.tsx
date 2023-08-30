import {FlatList} from 'react-native';
import styles from './styles';
import FeedCard from './FeedCard';
import {data} from './events.json';

const FeedList = () => {
  return (
    <FlatList
      {...{data}}
      style={styles.container}
      keyExtractor={({_id}) => _id}
      renderItem={({item}) => <FeedCard {...item} />}
    />
  );
};

export default FeedList;
