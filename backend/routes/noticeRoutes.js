const express = require('express');
const router = express.Router();
const { createNotice, getNotices, updateNotice, deleteNotice } = require('../controllers/noticeController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, admin, createNotice).get(protect, getNotices);
router.route('/:id').put(protect, admin, updateNotice).delete(protect, admin, deleteNotice);

module.exports = router;
