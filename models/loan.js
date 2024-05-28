'use strict';
module.exports = (sequelize, DataTypes) => {
  const Loan = sequelize.define('Loan', {
    bookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    loanDate: DataTypes.DATE,
    renewalDate: DataTypes.DATE
  }, {});
  Loan.associate = function (models) {
  };
  return Loan;
};
