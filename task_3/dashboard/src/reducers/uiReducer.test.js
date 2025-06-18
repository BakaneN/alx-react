import uiReducer from './uiReducer';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const state = uiReducer(undefined, { type: 'DISPLAY_NOTIFICATION_DRAWER' });
    expect(state).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should set isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
    const currentState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    };

    const state = uiReducer(currentState, { type: 'HIDE_NOTIFICATION_DRAWER' });
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should set isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
    const state = uiReducer(undefined, { type: 'LOGIN_SUCCESS' });
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {}
    });
  });

  it('should set isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {
    const currentState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {}
    };

    const state = uiReducer(currentState, { type: 'LOGIN_FAILURE' });
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should set isUserLoggedIn to false when LOGOUT is passed', () => {
    const currentState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {}
    };

    const state = uiReducer(currentState, { type: 'LOGOUT' });
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });
});