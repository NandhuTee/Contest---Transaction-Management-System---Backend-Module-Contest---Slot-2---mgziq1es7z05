const express = require('express');

const {
  newTransaction,
  getAllTransaction,
  newCategory,
  getAllCategories,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactionControllers');

const isLoggedIn = require('../middlewares/isLoggedIn');
const { get } = require('../src/app');

const router = express.Router();

router.post('/transactions', isLoggedIn, newTransaction);
router.get('/transactions', isLoggedIn, getAllTransaction);
router.put('/transactions/:id', isLoggedIn, updateTransaction);
router.delete('/transactions/:id', isLoggedIn, deleteTransaction);
router.post('/categories', isLoggedIn, newCategory);
router.get('/categories', isLoggedIn, getAllCategories);

module.exports = router;
