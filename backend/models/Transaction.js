const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
  {
    payeeName: {
      type: String,
      required: [true, 'Please add the payee name'],
    },
    amount: {
      type: Number,
      required: [true, 'Please add the transaction amount'],
    },
    category: {
      type: String,
      required: [true, 'Please select a ledger category (e.g., Tuition, Donation)'],
    },
    method: {
      type: String,
      required: [true, 'Please specify payment method (e.g., Cash, Online)'],
    },
    status: {
      type: String,
      enum: ['Paid', 'Due', 'Pending'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Transaction', transactionSchema);
