import React from 'react';

function UserListComponent({ user, onAction }) {
  const handleAction = () => {
    const action = user.state === 'Activo' ? 'Desactivar' : 'Activar';
    onAction(user.id, action);
  };

  return (
    <div className="table-row" key={user.id}>
      <p>{user.id}</p>
      <p>{new Date(user.userDate).toLocaleDateString()}</p>
      <p>{new Date(user.returnDate).toLocaleDateString()}</p>
      <p>{user.loanExtension ? 'Sí' : 'No'}</p>
      <p>{user.state}</p>
      <p>{user.bibliographicMaterialId}</p>
      <p>
        {user.returnExtensionDate 
          ? new Date(user.returnExtensionDate).toLocaleDateString() 
          : 'N/A'}
      </p>
      <button onClick={handleAction}>
        {user.state === 'Activo' ? 'Desactivar' : 'Activar'}
      </button>
    </div>
  );
}

export default UserListComponent;
