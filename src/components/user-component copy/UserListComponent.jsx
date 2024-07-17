import React from 'react';
import LoanTable from './UserTable.jsx';

function LoanListComponent({ users, onAction }) {
  return (
    <LoanTable users={users} onAction={onAction} />
  );
}

export default LoanListComponent;
