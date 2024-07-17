import React from 'react';

function LoanListComponent({ loan, onAction }) {
  const handleAction = () => {
    const action = loan.state === 'Activo' ? 'Desactivar' : 'Activar';
    onAction(loan.id, action);
  };

  return (
    <div className="table-row" key={loan.id}>
      <p>{loan.id}</p>
      <p>{new Date(loan.loanDate).toLocaleDateString()}</p>
      <p>{new Date(loan.returnDate).toLocaleDateString()}</p>
      <p>{loan.loanExtension ? 'Sí' : 'No'}</p>
      <p>{loan.state}</p>
      <p>{loan.bibliographicMaterialId}</p>
      <p>
        {loan.returnExtensionDate 
          ? new Date(loan.returnExtensionDate).toLocaleDateString() 
          : 'N/A'}
      </p>
      <button onClick={handleAction}>
        {loan.state === 'Activo' ? 'Desactivar' : 'Activar'}
      </button>
    </div>
  );
}

export default LoanListComponent;
