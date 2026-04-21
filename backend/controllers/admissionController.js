const asyncHandler = require('express-async-handler');
const Admission = require('../models/Admission');

// @desc    Submit admission application
// @route   POST /api/admission
// @access  Public
const submitAdmission = asyncHandler(async (req, res) => {
  const {
    studentName,
    dob,
    gender,
    parentName,
    email,
    phone,
    address,
    courseAppliedFor,
    previousEducation,
  } = req.body;

  if (!studentName || !dob || !gender || !parentName || !email || !phone || !address || !courseAppliedFor) {
    res.status(400);
    throw new Error('Please add all required fields');
  }

  const admission = await Admission.create({
    studentName,
    dob,
    gender,
    parentName,
    email,
    phone,
    address,
    courseAppliedFor,
    previousEducation,
  });

  res.status(201).json(admission);
});

// @desc    Get all admission applications
// @route   GET /api/admission
// @access  Private/Admin
const getAdmissions = asyncHandler(async (req, res) => {
  const admissions = await Admission.find().sort({ createdAt: -1 });
  res.status(200).json(admissions);
});

// @desc    Update admission status
// @route   PUT /api/admission/:id
// @access  Private/Admin
const updateAdmissionStatus = asyncHandler(async (req, res) => {
  const admission = await Admission.findById(req.params.id);

  if (!admission) {
    res.status(404);
    throw new Error('Admission application not found');
  }

  const updatedAdmission = await Admission.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.status(200).json(updatedAdmission);
});

// @desc    Delete admission application
// @route   DELETE /api/admission/:id
// @access  Private/Admin
const deleteAdmission = asyncHandler(async (req, res) => {
  const admission = await Admission.findByIdAndDelete(req.params.id);

  if (!admission) {
    res.status(404);
    throw new Error('Admission application not found');
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  submitAdmission,
  getAdmissions,
  updateAdmissionStatus,
  deleteAdmission,
};
