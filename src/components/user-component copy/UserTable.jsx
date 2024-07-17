import React from 'react';
import './UserTable.css';
import UserRow from './UserRow';

const UserTable = ({ users }) => {
    return (
        <div className="user-table">
            <div className="table-header">
                <p>Name</p>
                <p>Email</p>
                <p>Role</p>
            </div>
            {users.map(user => (
                <UserRow key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserTable;
