import {Alert, Linking} from 'react-native';
import ReactNativeCalendarEvents from 'react-native-calendar-events';
import {CalendarEvent} from './types';

const {checkPermissions, requestPermissions} = ReactNativeCalendarEvents;

function useCalendarEvent(): {
  saveEvent(calendarEvent: CalendarEvent): Promise<void | unknown>;
} {
  async function saveEvent(calendarEvent: CalendarEvent) {
    const allreadyAuthorized = await checkPermissions(false).then(
      status => status === 'authorized',
    );

    const permissionGranted = await requestPermissions(false).then(
      status => status === 'authorized',
    );

    return new Promise((resolve, reject) => {
      function onErrror() {
        reject();
        Alert.alert(
          'Oops',
          'Calendar permission is not granted',
          [{text: 'Open Settings?', onPress: Linking.openSettings}],
          {cancelable: true},
        );
      }

      //add event to calendar
      function addToCalendar() {
        const {title, startDate, endDate} = calendarEvent;
        ReactNativeCalendarEvents.saveEvent(title, {startDate, endDate})
          .then(resolve)
          .catch(reject);
      }

      //   already authorized
      if (allreadyAuthorized) addToCalendar();
      else {
        if (permissionGranted) addToCalendar();
        else onErrror();
      }
    });
  }
  return {saveEvent};
}

export default useCalendarEvent;
