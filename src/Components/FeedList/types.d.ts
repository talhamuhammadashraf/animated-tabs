type Tag = {
  title: string;
  key: string;
};
type EventTime = {
  startTime: string;
  endTime: string;
};
export interface Event {
  _id: string;
  title: string;
  eventTime: EventTime;
  tags: Tag[];
}

export interface CalendarEvent {
  title: string;
  startDate: string;
  endDate: string;
}
