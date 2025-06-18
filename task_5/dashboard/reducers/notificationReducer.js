import { Map } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  notifications: Map(),
  filter: 'DEFAULT'
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalized = notificationsNormalizer(action.data);
      const notifications = normalized.entities.notifications;

      // Add isRead: false to each notification
      Object.keys(notifications).forEach((key) => {
        notifications[key].isRead = false;
      });

      return state.set('notifications', Map(notifications));
    }

    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}