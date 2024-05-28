const loanService = require('../services/loanService');

exports.renewLoan = async (req, res) => {
    const { id } = req.params;
    try {
        const loan = await loanService.renewLoan(id);
        if (loan) {
            res.status(200).json(loan);
        } else {
            res.status(404).json({ error: 'Prestamo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrio un error en la renovacion del prestamo' });
    }
};
