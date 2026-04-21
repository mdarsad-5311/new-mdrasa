const mongoose = require('mongoose');

const resultSchema = mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, 'Please add the student name'],
    },
    rollNo: {
      type: String,
      required: [true, 'Please add the roll number'],
    },
    className: {
      type: String,
      required: [true, 'Please add the class section'],
    },
    gpa: {
      type: String,
      required: [true, 'Please add GPA/Score'],
    },
    grade: {
      type: String,
      required: [true, 'Please add a cumulative grade'],
    },
    status: {
      type: String,
      enum: ['Pass', 'Fail', 'Pending Grading'],
      default: 'Pass',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Result', resultSchema);
