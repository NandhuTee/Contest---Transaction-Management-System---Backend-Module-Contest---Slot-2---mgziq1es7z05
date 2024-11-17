const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');
const Transaction = require('../models/transactionModel');

// Create a new transaction
const newTransaction = async (req, res) => {
  try {
    //Write your code here
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const getAllTransaction = async (req, res) => {
  try {
    //Write your code here and populate Category with transaction
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateTransaction = async (req, res) => {
  try {
    // Write your code here to update a transaction
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    // Write your code here to delete a transaction
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const newCategory = async (req, res) => {
  try {
    // Write a code here to create a new category
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const getAllCategories = async (req, res) => {
  try {
    //Write your code here to get All Category
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  newTransaction,
  getAllTransaction,
  updateTransaction,
  deleteTransaction,
  newCategory,
  getAllCategories,
};
