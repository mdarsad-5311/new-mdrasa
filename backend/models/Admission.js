const mongoose = require('mongoose');

const admissionSchema = mongoose.Schema(
  {
    studentName: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    parentName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    courseAppliedFor: { type: String, required: true },
    previousEducation: { type: String },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Admission', admissionSchema);
