const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user_id: String,
    type: {
        type: String,
        enum: ['email', 'sms', 'inapp'],
    },
    message: String,
    timestamp: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Notification', notificationSchema);
