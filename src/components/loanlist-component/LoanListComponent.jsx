import React from 'react';
import LoanTable from './LoanTable.jsx';

function LoanListComponent({ loans, onAction }) {
  return (
    <LoanTable loan={loans} onAction={onAction} />
  );
}

export default LoanListComponent;
