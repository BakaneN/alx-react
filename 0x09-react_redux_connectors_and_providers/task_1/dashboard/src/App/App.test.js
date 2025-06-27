import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('Testing mapStateToProps behavior', () => {
  it('returns isLoggedIn and displayDrawer from state', () => {
    const fakeState = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true
    });

    const expectedOutput = {
      isLoggedIn: true,
      displayDrawer: true
    };

    const mappedProps = mapStateToProps(fakeState);
    expect(mappedProps).toEqual(expectedOutput);
  });
});

