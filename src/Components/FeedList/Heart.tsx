import {Image, TouchableOpacity} from 'react-native';
import {heart, heartFilled} from '../../Assets';
import {FC, useState} from 'react';
import useCalendarEvent from './useCalendarEvent';
import styles from './styles';
import {CalendarEvent} from './types';

const Heart: FC<{calendarEvent: CalendarEvent}> = ({calendarEvent}) => {
  const [filled, setFilled] = useState<boolean>(false);
  const {saveEvent} = useCalendarEvent();

  return (
    <TouchableOpacity
      onPress={() =>
        saveEvent(calendarEvent)
          .then(() => setFilled(true))
          .catch(() => setFilled(false))
      }>
      <Image source={filled ? heartFilled : heart} style={styles.heart} />
    </TouchableOpacity>
  );
};
export default Heart;
