
import { normalize, schema } from 'normalizr';


const course = new schema.Entity('courses');

const courseListSchema = [course];


export function coursesNormalizer(data) {
  return normalize(data, courseListSchema);
}