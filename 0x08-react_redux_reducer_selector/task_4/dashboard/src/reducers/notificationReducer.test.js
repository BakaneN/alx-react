// reducers/notificationReducer.test.js

import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the default state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual({
      notifications: [],
      filter: 'DEFAULT'
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' }
      ]
    };

    const expected = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false }
      ]
    };

    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expected);
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false }
      ]
    };

    const action = {
      type: MARK_AS_READ,
      index: 2
    };

    const expected = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true }
      ]
    };

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expected);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: []
    };

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT'
    };

    const expected = {
      filter: 'URGENT',
      notifications: []
    };

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expected);
  });
});