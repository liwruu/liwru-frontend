import React, { useState } from 'react';
import { renewLoan } from '../services/loanService';

const RenewLoan = () => {
    const [loanId, setLoanId] = useState('');
    const [message, setMessage] = useState('');

    const handleRenewal = async () => {
        try {
            const response = await renewLoan(loanId);
            setMessage('Loan renewed successfully!');
        } catch (error) {
            setMessage('Error renewing loan.');
        }
    };

    return (
        <div>
            <h1>Renew Loan</h1>
            <input
                type="text"
                placeholder="Enter Loan ID"
                value={loanId}
                onChange={(e) => setLoanId(e.target.value)}
            />
            <button onClick={handleRenewal}>Renew</button>
            <p>{message}</p>
        </div>
    );
};

export default RenewLoan;
