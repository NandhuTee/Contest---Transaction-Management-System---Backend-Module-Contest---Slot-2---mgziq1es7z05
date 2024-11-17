const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');
const Transaction = require('../models/transactionModel');

// Create a new transaction
const newTransaction = async (req, res) => {
  try {
    const { type, amount, category } = req.body;

    // Check if the category exists
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Create the transaction
    const transaction = new Transaction({ type, amount, category });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

// Get all transactions (populating Category)
const getAllTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('category', 'name');
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Update a transaction
const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, amount, category } = req.body;

    // Update the transaction
    const transaction = await Transaction.findByIdAndUpdate(
      id,
      { type, amount, category },
      { new: true }
    ).populate('category', 'name');

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findByIdAndDelete(id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

// Create a new category
const newCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Create the category
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
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
