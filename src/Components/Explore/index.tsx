import {View} from 'react-native';
import FeedList from '../FeedList';
import AnimatedTab from '../Tab';
import styles from './styles';

const Explore = () => (
  <View style={styles.container}>
    <AnimatedTab
      scenes={[
        {key: 'theArt', title: 'The Art', component: FeedList},
        {key: 'community', title: 'Community', component: FeedList},
        {key: 'all', title: 'All', component: FeedList},
        {key: 'bodyMind', title: 'Body+Mind', component: FeedList},
        {key: 'party', title: 'Party', component: FeedList},
      ]}
    />
  </View>
);
export default Explore;
