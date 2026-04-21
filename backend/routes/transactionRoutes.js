const express = require('express');
const router = express.Router();
const { createTransaction, getTransactions, updateTransaction, deleteTransaction } = require('../controllers/transactionController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, admin, createTransaction).get(protect, admin, getTransactions);
router.route('/:id').put(protect, admin, updateTransaction).delete(protect, admin, deleteTransaction);

module.exports = router;
