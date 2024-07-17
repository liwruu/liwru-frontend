import React, { useState, useEffect } from 'react';
import LoanRow from './LoanRow.jsx';
import './LoanTable.css';

function LoanTable({ user, onAction }) {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    if (user && user.id) {
      fetch(`http://localhost:4000/loans/user/${user.id}`)
        .then(response => response.json())
        .then(data => setLoans(data))
        .catch(error => console.error('Error fetching loans:', error));
    }
  }, [user]);

  return (
    <div className="loan-table">
      <div className="table-header">
        <p>ID</p>
        <p>Loan Date</p>
        <p>Return Date</p>
        <p>Extension</p>
        <p>State</p>
        <p>Book ID</p>
        <p>Return Extension Date</p>
      </div>
      {loans.map(loan => (
        <LoanRow key={loan.id} loan={loan} onAction={onAction} />
      ))}
    </div>
  );
}

export default LoanTable;
