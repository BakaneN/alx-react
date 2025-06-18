// reducers/courseReducer.test.js

import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state as an empty array', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should return data with isSelected = false when FETCH_COURSE_SUCCESS is passed', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const action = {
      type: FETCH_COURSE_SUCCESS,
      data
    };

    const expected = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];

    const state = courseReducer(undefined, action);
    expect(state).toEqual(expected);
  });

  it('should set isSelected to true for the correct course when SELECT_COURSE is passed', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false }
    ];

    const action = { type: SELECT_COURSE, index: 2 };

    const expected = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true }
    ];

    const state = courseReducer(initialState, action);
    expect(state).toEqual(expected);
  });

  it('should set isSelected to false for the correct course when UNSELECT_COURSE is passed', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: true },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true }
    ];

    const action = { type: UNSELECT_COURSE, index: 1 };

    const expected = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true }
    ];

    const state = courseReducer(initialState, action);
    expect(state).toEqual(expected);
  });
});