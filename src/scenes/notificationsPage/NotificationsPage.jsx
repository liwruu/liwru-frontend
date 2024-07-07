import React, { useState } from 'react';

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([]);
    const [newNotification, setNewNotification] = useState('');

    const handleAddNotification = () => {
        setNotifications([...notifications, newNotification]);
        setNewNotification('');
    };

    return (
        <div>
            <h1>Notifications</h1>
            <input
                type="text"
                value={newNotification}
                onChange={(e) => setNewNotification(e.target.value)}
                placeholder="Enter your notification"
            />
            <button onClick={handleAddNotification}>Add Notification</button>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationsPage;
