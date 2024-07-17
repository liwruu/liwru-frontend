import React from 'react';

const UserRow = ({ user }) => {
    return (
        <div className="table-row">
            <p>{user.name}</p>
            <p className="email-cell">{user.email}</p>
            <p>{user.role}</p>
        </div>
    );
};

export default UserRow;
