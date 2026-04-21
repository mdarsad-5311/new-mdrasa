const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a notice title'],
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
    },
    audience: {
      type: String,
      required: [true, 'Please select target audience'],
    },
    status: {
      type: String,
      enum: ['Published', 'Draft', 'Urgent', 'Expired'],
      default: 'Published',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Notice', noticeSchema);
