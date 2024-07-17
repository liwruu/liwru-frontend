import React, { useState, useEffect } from 'react';
import LoanRow from './UserRow.jsx';
import './UserTable.css';

function UserTable({ user, onAction }) {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user && user.username) {
      fetch(`http://localhost:4000/users/${user.username}/loans`, {
        method: 'GET',
        credentials: 'include'
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error fetching loans');
          }
          return response.json();
        })
        .then((data) => setLoans(data))
        .catch((error) => {
          console.error('Error fetching loans:', error);
          setError(error.message);
        });
    }
  }, [user]);

  return (
    <div className="user-table">
      {error && <p className="error">{error}</p>}
      <div className="table-header">
        <p>ID</p>
        <p>Loan Date</p>
        <p>Return Date</p>
        <p>Extension</p>
        <p>State</p>
        <p>Book ID</p>
        <p>Return Extension Date</p>
      </div>
      {loans.map((user) => (
        <LoanRow key={user.id} user={user} onAction={onAction} />
      ))}
      {loans.length === 0 && <p>No users found.</p>} {}
    </div>
  );
}

export default UserTable;
