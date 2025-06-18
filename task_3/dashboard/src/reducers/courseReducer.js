import { Map } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map();

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalizedData = coursesNormalizer(action.data);
      const courses = normalizedData.entities.courses;

      // Add isSelected: false to each course
      Object.keys(courses).forEach((key) => {
        courses[key].isSelected = false;
      });

      return Map(courses);
    }

    case SELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], false);

    default:
      return state;
  }
}