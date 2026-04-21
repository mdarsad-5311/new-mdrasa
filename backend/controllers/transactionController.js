const asyncHandler = require('express-async-handler');
const Transaction = require('../models/Transaction');

// @desc    Record new transaction
// @route   POST /api/transactions
// @access  Private/Admin
const createTransaction = asyncHandler(async (req, res) => {
  const { payeeName, amount, category, method, status } = req.body;

  if (!payeeName || !amount || !category || !method) {
    res.status(400);
    throw new Error('Please add all required fields');
  }

  const transaction = await Transaction.create({
    payeeName,
    amount,
    category,
    method,
    status,
  });

  res.status(201).json(transaction);
});

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Private/Admin
const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find().sort({ createdAt: -1 });
  res.status(200).json(transactions);
});

// @desc    Update a transaction status
// @route   PUT /api/transactions/:id
// @access  Private/Admin
const updateTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (!transaction) {
    res.status(404);
    throw new Error('Transaction not found');
  }

  const updatedTransaction = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTransaction);
});

// @desc    Delete a transaction
// @route   DELETE /api/transactions/:id
// @access  Private/Admin
const deleteTransaction = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findByIdAndDelete(req.params.id);

  if (!transaction) {
    res.status(404);
    throw new Error('Transaction not found');
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
};
