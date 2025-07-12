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

// Function for getting notifications by user (Task 0 compatibility)
function getAllNotificationsByUser(userId) {
  return notificationsData
    .filter(notification => notification.author.id === userId)
    .map(notification => notification.context);
}

// Export everything
module.exports = {
  getAllNotificationsByUser,
  user,
  message,
  notification,
  normalizedData: normalize(notificationsData, [notification]),
};

