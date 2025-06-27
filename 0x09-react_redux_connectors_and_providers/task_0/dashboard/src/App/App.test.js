import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('Testing mapStateToProps behavior', () => {
  it('returns isLoggedIn as true when state has isUserLoggedIn set to true', () => {
    const fakeState = fromJS({
      isUserLoggedIn: true
    });

    const expectedOutput = {
      isLoggedIn: true
    };

    const mappedProps = mapStateToProps(fakeState);
    expect(mappedProps).toEqual(expectedOutput);
  });
});

