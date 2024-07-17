import React from 'react';
import LoanTable from './LoanTable.jsx';

function LoanListComponent({ users, onAction }) {
  return (
    <LoanTable users={users} onAction={onAction} />
  );
}

export default LoanListComponent;
