import React from 'react';
import LoanTable from './LoanTable.jsx';

function LoanListComponent({ loans, onAction }) {
  return (
    <LoanTable loans={loans} onAction={onAction} />
  );
}

export default LoanListComponent;
