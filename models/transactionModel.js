const mongoose = require('mongoose');
const Category = require('../models/categoryModel');

// type (String): Represents the type of transaction. It is a required field.
// amount (Number): Represents the amount of the transaction. It is a required field.
// category (ObjectId): References a Category document in the database. It is a required field.
// date (Date): Represents the date and time of the transaction. It has a default value of the current date and time.

const transactionSchema = new mongoose.Schema({
  //Write your code here
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
