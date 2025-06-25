import { normalize, schema } from 'normalizr';

// Define a user entity (if needed later)
const user = new schema.Entity('users');

// Define a message entity
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define a notification entity that contains a message and an author
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
}, {
  idAttribute: 'id'
});

// Normalize an array of notifications
const notificationListSchema = [notification];

export function notificationsNormalizer(data) {
  return normalize(data, notificationListSchema);
}