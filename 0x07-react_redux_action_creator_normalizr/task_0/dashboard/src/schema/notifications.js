const notificationsData = require('../../../../notifications.json');

function getAllNotificationsByUser(userId) {
  const notifications = notificationsData.default || notificationsData;
  return notifications
    .filter(notification => notification.author.id === userId)
    .map(notification => notification.context);
}

module.exports = { getAllNotificationsByUser };

