const asyncHandler = require('express-async-handler');
const Notice = require('../models/Notice');

// @desc    Create a notice
// @route   POST /api/notices
// @access  Private/Admin
const createNotice = asyncHandler(async (req, res) => {
  const { title, category, audience, status } = req.body;

  if (!title || !category || !audience) {
    res.status(400);
    throw new Error('Please add all required fields');
  }

  const notice = await Notice.create({
    title,
    category,
    audience,
    status,
  });

  res.status(201).json(notice);
});

// @desc    Get all notices
// @route   GET /api/notices
// @access  Public or Private/Admin depending on scope
const getNotices = asyncHandler(async (req, res) => {
  const notices = await Notice.find().sort({ createdAt: -1 });
  res.status(200).json(notices);
});

// @desc    Update notice status or info
// @route   PUT /api/notices/:id
// @access  Private/Admin
const updateNotice = asyncHandler(async (req, res) => {
  const notice = await Notice.findById(req.params.id);

  if (!notice) {
    res.status(404);
    throw new Error('Notice not found');
  }

  const updatedNotice = await Notice.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedNotice);
});

// @desc    Delete notice
// @route   DELETE /api/notices/:id
// @access  Private/Admin
const deleteNotice = asyncHandler(async (req, res) => {
  const notice = await Notice.findByIdAndDelete(req.params.id);

  if (!notice) {
    res.status(404);
    throw new Error('Notice not found');
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  createNotice,
  getNotices,
  updateNotice,
  deleteNotice,
};
