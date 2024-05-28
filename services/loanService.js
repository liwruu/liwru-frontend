const { Loan } = require('../models');

exports.renewLoan = async (id) => {
    const newRenewalDate = new Date();
    const loan = await Loan.findByPk(id);
    if (loan) {
        loan.renewalDate = newRenewalDate;
        await loan.save();
    }
    return loan;
};
