const asyncHandler = require('express-async-handler');
const Result = require('../models/Result');

// @desc    Declare a new result
// @route   POST /api/results
// @access  Private/Admin
const createResult = asyncHandler(async (req, res) => {
  const { studentName, rollNo, className, gpa, grade, status } = req.body;

  if (!studentName || !rollNo || !className || !gpa || !grade) {
    res.status(400);
    throw new Error('Please add all required fields');
  }

  const result = await Result.create({
    studentName,
    rollNo,
    className,
    gpa,
    grade,
    status,
  });

  res.status(201).json(result);
});

// @desc    Get all results
// @route   GET /api/results
// @access  Private/Admin or Public (depending on privacy rules)
const getResults = asyncHandler(async (req, res) => {
  const results = await Result.find().sort({ createdAt: -1 });
  res.status(200).json(results);
});

// @desc    Update a result
// @route   PUT /api/results/:id
// @access  Private/Admin
const updateResult = asyncHandler(async (req, res) => {
  const result = await Result.findById(req.params.id);

  if (!result) {
    res.status(404);
    throw new Error('Result not found');
  }

  const updatedResult = await Result.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedResult);
});

// @desc    Delete a result
// @route   DELETE /api/results/:id
// @access  Private/Admin
const deleteResult = asyncHandler(async (req, res) => {
  const result = await Result.findByIdAndDelete(req.params.id);

  if (!result) {
    res.status(404);
    throw new Error('Result not found');
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  createResult,
  getResults,
  updateResult,
  deleteResult,
};
