const asyncHandler = require("express-async-handler");
const { Notification } = require("../models/Notification");

/**
 * @desc    Get All Notifications for a user
 * @route   /api/notifications
 * @method  GET
 */
const getUserNotifications = asyncHandler(async (req, res) => {
    const notifications = await Notification.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
});

/**
 * @desc    Mark notification as read
 * @route   /api/notifications/:id
 * @method  PUT
 */
const markAsRead = asyncHandler(async (req, res) => {
    const notification = await Notification.findByIdAndUpdate(
        req.params.id,
        { $set: { isRead: true } },
        { new: true }
    );
    res.status(200).json(notification);
});

module.exports = { getUserNotifications, markAsRead };