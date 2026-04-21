const asyncHandler = require('express-async-handler');
const Teacher = require('../models/Teacher');

// @desc    Add a new teacher
// @route   POST /api/teachers
// @access  Private/Admin
const addTeacher = asyncHandler(async (req, res) => {
  const { name, email, phone, subject } = req.body;

  if (!name || !email || !phone || !subject) {
    res.status(400);
    throw new Error('Please add all required fields');
  }

  // Check if teacher email already exists
  const teacherExists = await Teacher.findOne({ email });

  if (teacherExists) {
    res.status(400);
    throw new Error('Teacher already exists with that email');
  }

  const teacher = await Teacher.create({
    name,
    email,
    phone,
    subject,
  });

  res.status(201).json(teacher);
});

// @desc    Get all teachers
// @route   GET /api/teachers
// @access  Private/Admin or Public
const getTeachers = asyncHandler(async (req, res) => {
  const teachers = await Teacher.find().sort({ createdAt: -1 });
  res.status(200).json(teachers);
});

// @desc    Update teacher status/info
// @route   PUT /api/teachers/:id
// @access  Private/Admin
const updateTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    res.status(404);
    throw new Error('Teacher not found');
  }

  const updatedTeacher = await Teacher.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTeacher);
});

// @desc    Delete teacher
// @route   DELETE /api/teachers/:id
// @access  Private/Admin
const deleteTeacher = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findByIdAndDelete(req.params.id);

  if (!teacher) {
    res.status(404);
    throw new Error('Teacher not found');
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  addTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
};
