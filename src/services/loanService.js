import axios from 'axios';

export const renewLoan = async (loanId) => {
    try {
        const response = await axios.put(`http://localhost:3000/renew-loan/${loanId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
