import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {format, parseISO} from 'date-fns';
import styles from './styles';
import {eventBanner} from '../../Assets';
import TagList from './TagList';
import Participants from './Participants';
import Heart from './Heart';
import {Event, EventTime} from './types';

const TimeSlot: FC<{eventTime: EventTime}> = ({eventTime}) => {
  return (
    <Text style={styles.timeSlot}>
      {format(parseISO(eventTime.startTime), 'EEE, MMM dd • HH:m - ')}
      {format(parseISO(eventTime.endTime), 'HH:m')}
    </Text>
  );
};

const FeedCard: FC<Event> = props => {
  const {title, eventTime, tags} = props;
  return (
    <View style={styles.itemContainer}>
      <Image source={eventBanner} resizeMode="contain" style={styles.banner} />

      <Text style={styles.itemTitle} numberOfLines={1}>
        {title}
      </Text>

      <TimeSlot {...{eventTime}} />

      <TagList {...{tags}} />

      <View style={styles.spreadRow}>
        <Participants />
        <Heart
          calendarEvent={{
            startDate: eventTime.startTime,
            endDate: eventTime.endTime,
            title,
          }}
        />
      </View>
    </View>
  );
};

export default FeedCard;
