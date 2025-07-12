const { normalize, schema } = require('normalizr');
const notificationsData = require('../../../../notifications.json');

// User entity
const user = new schema.Entity('users');

// Message entity
const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);

// Notification entity
const notification = new schema.Entity(
  'notifications',
  {
    author: user,
    context: message,
  }
);

// Normalized data
const normalizedData = normalize(notificationsData, [notification]);

// Function for getting notifications by user, using normalized data
function getAllNotificationsByUser(userId) {
  const { entities, result

